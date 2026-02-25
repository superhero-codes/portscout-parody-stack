# DropBlox - Dropbox Parody

A Dropbox-style cloud storage API parody for PortScout demo purposes.

## What it Parodies

Dropbox - the cloud storage and file synchronization service.

## How to Start

### With Node.js:

```bash
npm install
npm start
```

### With Docker:

```bash
docker build -t dropblox .
docker run -p 5315:5315 dropblox
```

## Port

- **HTTP**: 5315 (hardcoded in server.js)

## API Endpoints

- `GET /` - API info
- `GET /api/files` - List files
- `GET /api/files/:id` - Get file by ID
- `GET /api/storage` - Storage usage
- `POST /api/upload` - Upload file (mock)

## Notes

- API-only project (no frontend)
- Docker support included
- Returns mock JSON data
