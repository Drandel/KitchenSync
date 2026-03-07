# KitchenSync — Docker Compose Setup Guide

A step-by-step guide to setting up the local development environment using Docker Compose with a Node.js/TypeScript backend, React frontend, and PostgreSQL database.

---

## 1. Prerequisites

Make sure the following are installed on your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose v2)
- Node.js (for local tooling outside Docker, e.g. running migrations)
- Git

Verify Docker is working:

```bash
docker --version
docker compose version
```

---

## 2. Directory Structure

Create the following project structure from the repo root:

```
kitchensync/
├── docker-compose.yml
├── docker-compose.dev.yml
├── .env
├── .env.example
├── .gitignore
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
└── db/
    └── init/
        └── 01_seed.sql   ← optional, runs only on first volume creation
```

---

## 3. Environment Variables

### `.env.example` (commit this)

```env
# Database
POSTGRES_DB=kitchensync
POSTGRES_USER=kitchensync_user
POSTGRES_PASSWORD=changeme
DATABASE_URL=postgresql://kitchensync_user:changeme@db:5432/kitchensync

# Backend
NODE_ENV=development
PORT=3001

# Frontend
VITE_API_URL=http://localhost:3001
```

### `.env` (never commit — add to `.gitignore`)

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

> ⚠️ **Gotcha:** The `DATABASE_URL` uses `db` (the Docker service name) as the hostname. This works inside Docker containers. From your local machine outside Docker, you would use `localhost:5432` instead.

---

## 4. The `docker-compose.yml` (Base Config)

This is the shared, production-leaning config. It defines services but does **not** include hot reload or bind mounts.

```yaml
services:
  db:
    image: postgres:16-alpine
    restart: unless-stopped
    env_file: .env
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./db/init:/docker-entrypoint-initdb.d
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 5

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    restart: unless-stopped
    env_file: .env
    ports:
      - "3001:3001"
    depends_on:
      db:
        condition: service_healthy

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    restart: unless-stopped
    env_file: .env
    ports:
      - "5173:5173"
    depends_on:
      - backend

volumes:
  postgres_data:
```

> 💡 **Why `depends_on` with `condition: service_healthy`?** Without this, the backend can start before Postgres is ready to accept connections, causing a crash-on-boot. The healthcheck ensures the DB is actually ready.

---

## 5. The `docker-compose.dev.yml` (Dev Overrides)

This file **overrides** the base config for local development. It adds bind mounts and hot reload.

```yaml
services:
  backend:
    build:
      target: development
    volumes:
      - ./backend:/app
      - /app/node_modules # ← Prevents host node_modules overwriting container's
    command: npm run dev # e.g. ts-node-dev or nodemon

  frontend:
    build:
      target: development
    volumes:
      - ./frontend:/app
      - /app/node_modules # ← Same fix required here
    command: npm run dev
```

> ⚠️ **Gotcha — The `node_modules` line is critical.** Without `- /app/node_modules`, Docker will mount your host directory over `/app`, which overwrites the node_modules that were installed inside the container during the build. This causes `cannot find module` errors. The empty volume line tells Docker to keep the container's own node_modules.

Run dev environment with both files:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

Add an alias to your shell for convenience:

```bash
alias dcdev="docker compose -f docker-compose.yml -f docker-compose.dev.yml"
# Then just use:
dcdev up
dcdev down
dcdev logs backend
```

---

## 6. Backend Dockerfile (`backend/Dockerfile`)

Uses multi-stage builds so the same Dockerfile supports both dev and prod.

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Development stage — used by docker-compose.dev.yml
FROM base AS development
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS builder
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3001
CMD ["node", "dist/index.js"]
```

### Backend `package.json` scripts

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### Backend `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 7. Frontend Dockerfile (`frontend/Dockerfile`)

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Development stage
FROM base AS development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]   # --host exposes Vite outside the container

# Build stage
FROM base AS builder
COPY . .
RUN npm run build

# Production stage (serves via nginx)
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

> ⚠️ **Gotcha — Vite's `--host` flag.** By default Vite only listens on `localhost` inside the container, making it unreachable from your browser. The `--host` flag binds it to `0.0.0.0` so Docker can forward traffic to it.

---

## 8. Database Initialization

### About `db/init/`

Any `.sql` or `.sh` files in this directory are automatically run by the Postgres Docker image **on first container creation only.**

> ⚠️ **Gotcha — Init scripts are ignored if the volume already exists.** If you've already run `docker compose up`, the volume exists and init scripts won't re-run. To force a re-run: `docker compose down -v` (this deletes all data). Use init scripts for seed data, not migrations.

### Recommendation: Use a Migration Tool

For your schema (which is well-defined in the ERD), use a proper migration tool rather than init SQL files:

- **Drizzle ORM** — lightweight, TypeScript-native, great DX
- **Prisma** — more opinionated, excellent type generation

Example with Drizzle — add a migration script to `package.json`:

```json
{
  "scripts": {
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
  }
}
```

Run migrations against the running container:

```bash
docker compose exec backend npm run db:migrate
```

---

## 9. `.gitignore` Additions

```gitignore
# Environment
.env
.env.local

# Dependencies
node_modules/

# Build outputs
dist/
build/

# Docker
.docker/
```

---

## 10. Common Commands

| Task                             | Command                                                             |
| -------------------------------- | ------------------------------------------------------------------- |
| Start dev environment            | `docker compose -f docker-compose.yml -f docker-compose.dev.yml up` |
| Stop (keep data)                 | `docker compose down`                                               |
| Stop + delete DB data            | `docker compose down -v` ⚠️                                         |
| Rebuild after Dockerfile changes | `docker compose up --build`                                         |
| View backend logs                | `docker compose logs -f backend`                                    |
| Open shell in backend            | `docker compose exec backend sh`                                    |
| Run migrations                   | `docker compose exec backend npm run db:migrate`                    |
| Connect to Postgres directly     | `docker compose exec db psql -U kitchensync_user -d kitchensync`    |

---

## 11. Networking Summary

Understanding how services communicate is important:

| From                   | To       | Address to use                    |
| ---------------------- | -------- | --------------------------------- |
| Backend container      | Postgres | `db:5432` (service name)          |
| Frontend container     | Backend  | `backend:3001` (server-side only) |
| Browser (your machine) | Backend  | `localhost:3001`                  |
| Browser (your machine) | Frontend | `localhost:5173`                  |
| Your machine           | Postgres | `localhost:5432`                  |

> 💡 The frontend React app runs **in the browser**, not in the container. So API calls from React always use `localhost:3001`, not `backend:3001`. The `VITE_API_URL=http://localhost:3001` env var handles this.

---

## 12. First-Time Setup Checklist

```bash
# 1. Clone the repo
git clone <repo-url> && cd kitchensync

# 2. Set up environment
cp .env.example .env
# Edit .env with your values

# 3. Build and start everything
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# 4. In a new terminal, run migrations
docker compose exec backend npm run db:migrate

# 5. Open the app
# Frontend: http://localhost:5173
# Backend API: http://localhost:3001
# Postgres: localhost:5432
```

---

## Future State: Python AI Service

When the AI service is ready (per the architecture diagram), add it as a separate service in `docker-compose.yml`:

```yaml
ai-service:
  build:
    context: ./ai
    dockerfile: Dockerfile
  env_file: .env
  ports:
    - "8000:8000"
  depends_on:
    - db
```

The Node.js backend calls it via `http://ai-service:8000` internally. No changes needed to the existing services.
