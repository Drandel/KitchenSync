# KitchenSync
A private recipe hub for small cooking groups. Upload photos of dishes, store &amp; browse recipes with tags, view ingredients &amp; steps, plan meals, and auto-generate scaled grocery lists. Simple, photo-forward, and built for friends and family who cook together.

## Dev Commands

Run these from the repo root:

| Command | Description |
|---|---|
| `npm run dev` | Start the full dev stack (with hot reload) |
| `npm run dev:build` | Same, but rebuild Docker images first |
| `npm run down` | Stop all containers (keeps DB data) |
| `npm run down:clean` | Stop all containers and delete DB data ⚠️ |
| `npm run logs` | Tail logs for all services |
| `npm run logs:backend` | Tail backend logs only |
| `npm run logs:frontend` | Tail frontend logs only |

> See `project_docker_setup.md` for full setup instructions.
