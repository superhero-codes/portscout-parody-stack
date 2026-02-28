# OnlyFarms — Parody 🌾

A premium farm content subscription platform. Like OnlyFans, but for tractors, hay bales, and barn door reveals.

## What it Parodies

OnlyFans — but instead of... that content, it's all about exclusive farm footage. Subscribe for $9.99/month to unlock premium hay.

## Architecture

OnlyFarms runs **3 separate processes** on **3 different ports**:

| Process           | Port | What it Does                          |
| ----------------- | ---- | ------------------------------------- |
| Main Server       | 5320 | Serves the UI and feed API            |
| Background Worker | 5321 | Processes subscriptions (very slowly) |
| Analytics Engine  | 5322 | Generates fake engagement metrics     |

> **Wait, which port is the main one?** Great question. We're not sure either. Try all three. One of them has the UI. Probably.

## How to Start

```bash
npm install
npm start
```

This spawns all 3 processes. Each logs independently to the console. It's chaos, but it's _farm_ chaos.

Or run them individually (if you enjoy confusion):

```bash
node server.js      # Port 5320 — or is it 5321?
node worker.js      # Port 5321 — wait, maybe this one?
node analytics.js   # Port 5322 — honestly just try them all
```

## Ports

- **Main Server**: 5320
- **Worker**: 5321
- **Analytics**: 5322

> **Pro tip**: If you can't remember which port does what, that's the intended experience.

## Special Features

- **Multi-process architecture**: 3 Node processes, 3 ports, 1 confused developer
- **Independent logging**: Each process logs with its own prefix. Your terminal will be a farm.
- **Fake analytics**: Tracks hay bale views, egg sales, and tractor clicks
- **OnlyFans-style UI**: Feed layout with locked/premium content, stories, and subscribe buttons

## Notes

- All processes are spawned via `child_process.fork()`
- Ctrl+C gracefully shuts down all processes
- The subscription button charges nothing (we're not monsters)
- No actual farm animals were harmed in the making of this parody
