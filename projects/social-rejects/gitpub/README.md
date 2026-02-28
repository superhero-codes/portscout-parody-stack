# GitPub - GitHub Parody (Monorepo)

A GitHub-style code hosting platform parody for PortScout demo purposes.

## What it Parodies

GitHub - the code hosting and collaboration platform.

## Structure

```
gitpub/
├── apps/
│   └── web/        # Next.js frontend (port 5308)
├── packages/
│   └── db/         # Prisma mock setup (SQLite)
├── pnpm-workspace.yaml
└── package.json
```

## How to Start

```bash
pnpm install
pnpm dev
```

## Ports

- **Web**: 5308 (configured in `apps/web/package.json` dev script)

## Notes

- pnpm workspace monorepo
- Dark mode friendly GitHub-style UI
- Prisma schema included (mock, no real DB required)
- Mock repository and activity data
