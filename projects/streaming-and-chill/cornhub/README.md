# CornHub - Parody 🌽

A corn content platform parody for PortScout demo purposes.

## What it Parodies

A well-known content platform, but for corn enthusiasts only.

## How to Start

```bash
# Install both frontend and backend
cd frontend && npm install && cd ../backend && npm install && cd ..

# Start both
npm run dev
```

Or individually:

```bash
cd frontend && npm run dev   # Frontend on port 5310
cd backend && npm run dev    # Backend on port 5314
```

## Ports

- **Frontend**: 5310 (configured in `frontend/vite.config.js`)
- **Backend**: 5314 (hardcoded in `backend/server.js`)

## Special Features

- **Slow-start backend**: The backend has an intentional 2.5 second startup delay
- **Slow endpoint**: `GET /api/slow` has a 2-3 second response delay
- These are used to demonstrate PortScout's handling of slow-starting services

## Notes

- NOT a monorepo (separate frontend/backend directories)
- Dark mode friendly
- Mock corn content data
