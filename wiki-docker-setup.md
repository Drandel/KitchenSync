# Docker & Environment Setup

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Compose v2)
- Node.js (for running root-level npm scripts)
- Git

---

## Environment Variables

Copy `.env.example` to `.env` and fill in values before starting:

```bash
cp .env.example .env
```

**`.env.example`**

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

> `.env` is gitignored — never commit it. `DATABASE_URL` uses `db` as the hostname (the Docker service name). Outside Docker, use `localhost:5432`.

---

## Services

| Service    | Image / Build          | Port | Description                  |
| ---------- | ---------------------- | ---- | ---------------------------- |
| `db`       | `postgres:16-alpine`   | 5432 | PostgreSQL database          |
| `backend`  | `./backend/Dockerfile` | 3001 | NestJS API server            |
| `frontend` | `./frontend/Dockerfile`| 5173 | Vite + React dev server      |

The backend waits for the DB healthcheck before starting. The frontend waits for the backend.

---

## Compose File Structure

Two Compose files are layered:

- **`docker-compose.yml`** — base config (shared across environments). Defines all services, ports, healthchecks, and the named `postgres_data` volume.
- **`docker-compose.dev.yml`** — dev overrides. Targets the `development` build stage in each Dockerfile, adds bind mounts for hot reload, and overrides the start command.

The dev override mounts the source directory into `/app` but preserves the container's `node_modules` via an anonymous volume — this prevents the host directory from overwriting packages installed during the Docker build.

---

## Dockerfile Stages

Both Dockerfiles use multi-stage builds with three stages: `base`, `development`, `builder`, and `production`.

### Backend (`backend/Dockerfile`)

- `base` — installs `openssl`, runs `npm install`, generates the Prisma client
- `development` — used in dev; bind mounts replace the copied source at runtime
- `builder` — compiles TypeScript via `npm run build`
- `production` — copies `dist/` from builder, runs `node dist/main`

### Frontend (`frontend/Dockerfile`)

- `base` — runs `npm install`
- `development` — runs `npm run dev -- --host` (binds Vite to `0.0.0.0` so Docker can forward traffic)
- `builder` — runs `npm run build`
- `production` — serves `dist/` via `nginx:alpine` on port 80

---

## Starting the Dev Environment

Root `package.json` scripts wrap the Compose commands:

| Script              | Command                                                                  |
| ------------------- | ------------------------------------------------------------------------ |
| `npm run dev`       | Start dev environment (no rebuild)                                       |
| `npm run dev:build` | Start dev environment and rebuild images (use after Dockerfile changes)  |
| `npm run down`      | Stop containers, keep DB data                                            |
| `npm run down:clean`| Stop containers and delete DB volume (destructive)                       |
| `npm run logs`      | Tail logs from all services                                              |
| `npm run logs:backend` | Tail backend logs only                                                |
| `npm run logs:frontend`| Tail frontend logs only                                               |

**First-time setup:**

```bash
cp .env.example .env
# edit .env with your values
npm run dev:build
```

Subsequent starts (no Dockerfile changes):

```bash
npm run dev
```

---

## Common Commands

```bash
# Open a shell in a running container
docker compose exec backend sh
docker compose exec frontend sh

# Connect to Postgres directly
docker compose exec db psql -U kitchensync_user -d kitchensync

# Run Prisma migrations
docker compose exec backend npx prisma migrate dev

# Rebuild a single service
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build backend
```

---

## Networking

| From                   | To       | Address             |
| ---------------------- | -------- | ------------------- |
| Backend container      | Postgres | `db:5432`           |
| Frontend container     | Backend  | `backend:3001`      |
| Browser                | Backend  | `localhost:3001`    |
| Browser                | Frontend | `localhost:5173`    |
| Host machine           | Postgres | `localhost:5432`    |

> React runs in the browser, not the container — API calls from the frontend always use `localhost:3001`, not `backend:3001`. This is why `VITE_API_URL=http://localhost:3001`.
