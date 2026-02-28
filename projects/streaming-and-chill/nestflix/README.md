# Nestflix - Netflix Parody (Monorepo)

A Netflix-style streaming platform parody for PortScout demo purposes.

## What it Parodies

Netflix - the streaming entertainment service.

## Structure

```
nestflix/
├── apps/
│   ├── web/    # Vue + Vite frontend (port 5306)
│   └── api/    # Express API backend (port 5312)
├── packages/
│   └── ui/     # Shared UI utilities
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
pnpm --filter @nestflix/web dev   # Frontend on port 5306
pnpm --filter @nestflix/api dev   # API on port 5312
```

## Ports

- **Web**: 5306 (configured in `apps/web/vite.config.js`)
- **API**: 5312 (hardcoded in `apps/api/server.js`)

## Notes

- pnpm workspace monorepo
- Dark mode friendly Netflix-style UI
- Mock show data
