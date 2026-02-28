# Locker — Parody 🐳

Like Docker, but nothing works. The compose file is perfect. We tested it. Trust us.

## What it Parodies

Docker — the containerization platform. But our docker-compose.yml has a few... creative decisions.

## How to Start

```bash
docker compose up
```

It works perfectly. We promise. No issues at all. Ship it.

## Ports

- **Frontend**: 5326
- **Backend**: 5327
- **Database**: 5328
- **Cache**: 5329

## Architecture

```
┌─────────────┐     ┌─────────────┐
│  Frontend    │────▶│  Backend    │
│  (nginx)     │     │  (node)     │
└─────────────┘     └─────────────┘
       │                    │
       ▼                    ▼
┌─────────────┐     ┌─────────────┐
│  Cache       │────▶│  Database   │
│  (redis)     │     │  (postgres) │
└─────────────┘     └─────────────┘
```

> This diagram is accurate. The compose file is accurate. Everything is fine. 🔥

## Special Features

- **Production-ready docker-compose.yml**: Thoroughly tested in our imagination
- **Microservices architecture**: 4 services, 0 of which actually work together
- **Best practices**: We followed all of them. Especially the ones about circular dependencies.

## Notes

- If `docker compose up` fails, that's a Docker bug, not ours
- The password in the compose file is "definitely-not-a-real-password" which is very secure
- We set `HOPE=false` as an environment variable because we're realists
