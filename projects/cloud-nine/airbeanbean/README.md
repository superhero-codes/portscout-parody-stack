# AirBeanBean - Airbnb Parody (Monorepo)

An Airbnb-style rental platform parody for PortScout demo purposes.

## What it Parodies

Airbnb - the online marketplace for lodging and experiences.

## Structure

```
airbeanbean/
├── apps/
│   ├── web/    # React + Vite frontend (port 5307)
│   └── api/    # Fastify API backend (port 5313)
├── pnpm-workspace.yaml
└── package.json
```

## How to Start

```bash
pnpm install
pnpm dev
```

Or individually:

```bash
pnpm --filter @airbeanbean/web dev   # Frontend on port 5307
pnpm --filter @airbeanbean/api dev   # API on port 5313
```

## Ports

- **Web**: 5307 (configured in `apps/web/vite.config.js`)
- **API**: 5313 (hardcoded in `apps/api/server.js`)

## Notes

- pnpm workspace monorepo
- Dark mode friendly Airbnb-style UI
- Mock listing data
