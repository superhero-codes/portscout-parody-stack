# 🧪 PortScout Parody Stack — Test Matrix

> A comprehensive test matrix for all **26 projects** in the PortScout Parody Stack.
> Use this to verify that [PortScout](https://portscout.app) correctly detects, categorizes, and monitors every project — including the ones that misbehave on purpose.

---

## Full Test Matrix

| # | Project | Parodies | Directory | Tech Stack | Port(s) | Run Command(s) | Intentional Behavior | Pre-Start Detection | Post-Start Detection |
|---|---------|----------|-----------|------------|---------|-----------------|----------------------|---------------------|----------------------|
| 1 | **Lotion** | Notion | `projects/lotion` | Vue 3 + Vite | 5301 | `npm run dev` | ⚠️ Port conflict with SpotiPie | `package.json` with vite, `vite.config.js` with port 5301 | HTTP 200 on `:5301`, serves Vue SPA |
| 2 | **Snack** | Slack | `projects/snack` | React + Vite | 5302 | `npm run dev` | Normal operation | `package.json` with react/vite | HTTP 200 on `:5302` |
| 3 | **TubeYou** | YouTube | `projects/tubeyou` | Angular CLI | 5303 | `npm start` | Normal operation | `angular.json`, `package.json` with @angular | HTTP 200 on `:5303` |
| 4 | **SpotiPie** | Spotify | `projects/spotipie` | SvelteKit + WS | 5301, WS:5311 | `npm run dev:all` | ⚠️ Port conflict with Lotion, WebSocket server | `svelte.config.js`, `package.json` | HTTP 200 on `:5301`, WS on `:5311` |
| 5 | **Strife** | Stripe | `projects/strife` | Next.js | 5305 | `npm run dev` | Normal operation | `next.config.mjs`, `package.json` | HTTP 200 on `:5305` |
| 6 | **Nestflix** | Netflix | `projects/nestflix` | Vue + Express (monorepo) | 5306, 5312 | `pnpm dev` | Monorepo with pnpm workspaces | `pnpm-workspace.yaml`, multiple `package.json` | HTTP 200 on `:5306` and `:5312` |
| 7 | **AirBeanBean** | Airbnb | `projects/airbeanbean` | React + Fastify (monorepo) | 5307, 5313 | `pnpm dev` | Monorepo with pnpm workspaces | `pnpm-workspace.yaml`, multiple `package.json` | HTTP 200 on `:5307` and `:5313` |
| 8 | **GitPub** | GitHub | `projects/gitpub` | Next.js + Prisma (monorepo) | 5308 | `pnpm dev` | Monorepo with pnpm workspaces | `pnpm-workspace.yaml`, `schema.prisma` | HTTP 200 on `:5308` |
| 9 | **DocuSwine** | DocuSign | `projects/docuswine` | SolidJS + Vite | 5309 | `npm run dev` | Normal operation | `package.json` with solid-js | HTTP 200 on `:5309` |
| 10 | **CornHub** | 🌽 | `projects/cornhub` | React + Express | 5310, 5314 | `npm run dev` | 🐌 Slow backend (2.5s startup delay, slow endpoints) | `package.json` in `frontend/` and `backend/` | HTTP 200 on `:5310`, delayed response on `:5314` |
| 11 | **DropBlox** | Dropbox | `projects/dropblox` | Node + Docker | 5315 | `npm start` | Has Dockerfile | `Dockerfile`, `package.json` | HTTP 200 on `:5315` |
| 12 | **OnlyFarms** | OnlyFans | `projects/onlyfarms` | Node/Express (3 processes) | 5320, 5321, 5322 | `npm start` | 🔀 Spawns 3 child processes (server, worker, analytics), each on its own port, each logging independently | `package.json`, `start-all.js`, `server.js`, `worker.js`, `analytics.js` | HTTP 200 on `:5320` (UI), `:5321/api/worker/status`, `:5322/api/analytics`; 3 separate processes visible |
| 13 | **SubSnack** | Substack | `projects/subsnack` | Node/Express | 5323 | `npm run dev` | 📁 Server buried 6 directories deep (`app/core/platform/runtime/web/server/`), README references wrong path | `package.json` with deeply nested start script path | HTTP 200 on `:5323` |
| 14 | **Finder** | Tinder | `projects/finder` | Svelte + Vite | 5173 | `npm run dev` | Normal operation, swipe UI | `package.json` with svelte, `vite.config.js` | HTTP 200 on `:5173` |
| 15 | **BeerFinder** | Beer apps | `projects/beerfinder` | Node/Express | 4321 | `npm run dev` | 🔢 Non-standard port | `package.json`, `server.js` with port 4321 | HTTP 200 on `:4321` |
| 16 | **CatTranslator** | — | `projects/cattranslator` | Static HTML/CSS/JS | None | `open index.html` | 📄 No `package.json`, no build step, no server, no port | Only `index.html` and `README.md`, no `package.json` | N/A (static file, no server) |
| 17 | **RockNRoll** | Rick Roll | `projects/rocknroll` | Node/Express | 5324 | `npm start` | 🎵 Autoplays YouTube video, all routes (`/escape`, `/exit`, `/stop`) redirect to `/`, no way out | `package.json`, `server.js` | HTTP 200 on `:5324` with embedded YouTube iframe, `/escape` → 302 redirect |
| 18 | **Faceplant** | Facebook | `projects/faceplant` | Node/Express | 5325 | `npm start` | 💀 50% crash on startup (`Math.random < 0.5` → `process.exit(1)`), early Facebook UI when running | `package.json`, `server.js` with random crash logic | Either process exits with code 1 (50%) OR HTTP 200 on `:5325` (50%) |
| 19 | **Locker** | Docker | `projects/locker` | Docker Compose | 5326–5329 | `docker compose up` | 💥 Intentionally broken `docker-compose.yml`: references non-existent services (`nonexistent-service`, `also-not-real`), circular dependency (frontend→cache→frontend) | `docker-compose.yml` with invalid service references | `docker compose up` fails with dependency error |
| 20 | **MemEater** | — | `projects/memeater` | Node/Express | 5330 | `npm start` | 🍽️ Intentional memory leak: allocates ~1MB every 5 seconds into array that's never freed, logs heap usage | `package.json`, `server.js` | HTTP 200 on `:5330`, heap grows continuously (~1MB/5s), visible in `/api/status` |
| 21 | **CPUStorm** | — | `projects/cpustorm` | Node/Express | 5331 | `npm start` | ⚡ CPU spike: 2-second busy loop every 5 seconds, logs spike count | `package.json`, `server.js` | HTTP 200 on `:5331`, CPU spikes visible in process monitoring |
| 22 | **Waiter.com** | Weather.com | `projects/waitercom` | Node/Express | 5332 | `npm start` | ⏳ 30-second delay on EVERY response (middleware `setTimeout`), README doesn't mention delay | `package.json`, `server.js` with 30000ms `setTimeout` middleware | Server starts immediately but HTTP responses take 30s, port is open but unresponsive for 30s per request |
| 23 | **HidenSeek** | — | `projects/hidenseek` | Node/Express | 5333 | `npm start` | 🎲 Returns random HTTP status codes (200, 404, 500, 418) on every request, logs each code | `package.json`, `server.js` | Port `:5333` open, but `GET /` returns random status (sometimes 200, sometimes 404/500/418) |
| 24 | **MySpice** | MySpace | `projects/myspice` | PHP | 5334 | `php -S localhost:5334` | 📜 2005-era MySpace UI, marquee tags, visitor counter, no modern tooling | `index.php`, no `package.json`, no `node_modules` | HTTP 200 on `:5334` (requires PHP) |
| 25 | **AltaVistaBaby** | AltaVista | `projects/altavistababy` | COBOL + HTML | None | `open index.html` or `cobc -x search.cob && ./search` | 🏦 COBOL CLI backend + static HTML frontend, retro 1998 search UI | `search.cob`, `index.html`, no `package.json` | N/A for HTML (static), COBOL binary runs in terminal |
| 26 | **Napper** | Napster | `projects/napper` | Ruby (Rack) | 5335 | `rackup -p 5335` | 🎵 Fake file-sharing UI with suspicious `.exe` files | `Gemfile`, `config.ru`, `app/controllers/` | HTTP 200 on `:5335` (requires Ruby + Rack) |

---

## 💥 Intentional Failures

These projects are _designed_ to crash, break, or otherwise misbehave. If they work perfectly, something is wrong.

| Project | Failure Mode | Details |
|---------|-------------|---------|
| **Faceplant** | 💀 50% crash on startup | Uses `Math.random() < 0.5` to decide whether to call `process.exit(1)` before the server starts. Run it twice — you'll get both outcomes. |
| **Locker** | 💥 Broken Docker Compose | `docker-compose.yml` references services that don't exist (`nonexistent-service`, `also-not-real`) and creates a circular dependency (`frontend` → `cache` → `frontend`). `docker compose up` will always fail. |
| **Lotion + SpotiPie** | ⚠️ Port conflict | Both projects are configured to use port `5301`. Starting both simultaneously will cause one to fail with `EADDRINUSE`. This is intentional. |

---

## 🍽️ Resource Hogs

These projects intentionally consume excessive system resources. **Do not leave them running unattended.**

| Project | Resource | Behavior | Monitoring |
|---------|----------|----------|------------|
| **MemEater** | 🧠 Memory | Allocates ~1MB every 5 seconds into an array that is never freed. Heap usage grows linearly until the process is killed or the system runs out of memory. | `GET /api/status` returns current heap usage. Watch `process.memoryUsage().heapUsed` grow over time. |
| **CPUStorm** | 🔥 CPU | Runs a 2-second busy loop (tight `while` loop) every 5 seconds. During the busy loop, the Node.js event loop is completely blocked. | CPU usage spikes to ~100% of one core every 5 seconds. Visible in Activity Monitor / `top` / `htop`. Spike count logged to stdout. |

> ⚠️ **Warning:** Running MemEater and CPUStorm alongside other projects will degrade overall system performance. MemEater will eventually consume all available memory if left unchecked.

---

## 🕵️ Hidden Behaviors

These projects have undocumented or misleading behaviors that PortScout should ideally detect or handle gracefully.

| Project | Hidden Behavior | What Makes It Tricky |
|---------|----------------|----------------------|
| **Waiter.com** | ⏳ 30-second response delay | The server starts immediately and the port is open, but every HTTP response is delayed by 30 seconds via middleware `setTimeout(next, 30000)`. The README does not mention this. A naive health check will time out. |
| **SubSnack** | 📁 Deeply nested server | The actual server file lives at `app/core/platform/runtime/web/server/index.js` — six directories deep. The README references the wrong path. Tooling that scans for `server.js` in the project root will miss it. |
| **RockNRoll** | 🎵 No escape routes | All "escape" routes (`/escape`, `/exit`, `/stop`, `/quit`) redirect back to `/` with a 302. The root page autoplays a YouTube video. There is no way to navigate away within the app. |
| **HidenSeek** | 🎲 Non-deterministic responses | Every request returns a random HTTP status code (200, 404, 500, or 418). Health checks that expect a consistent 200 will intermittently fail. |
| **OnlyFarms** | 🔀 Multi-process architecture | A single `npm start` spawns three independent child processes on three different ports (5320, 5321, 5322). Killing the parent may not kill the children. Port scanning will find three servers from one project. |
| **CornHub** | 🐌 Slow backend startup | The backend has a 2.5-second artificial delay before it starts listening. Health checks that run immediately after `npm run dev` will see the frontend but not the backend. |
| **CatTranslator** | 📄 No server at all | This project has no `package.json`, no `node_modules`, no build step, and no server. It's just a static HTML file. Tooling that expects a dev server will find nothing to start. |
| **MySpice** | 📜 Requires PHP | Unlike every other server-based project, MySpice requires PHP (`php -S localhost:5334`). There is no `package.json`. Node-based tooling will not detect it as a project. |
| **AltaVistaBaby** | 🏦 Requires COBOL compiler | The backend is written in COBOL (`search.cob`). Compiling it requires `cobc` (GnuCOBOL). The HTML frontend is static and works without it, but the full experience requires a COBOL toolchain. |
| **Napper** | 🎵 Requires Ruby + Rack | Uses a `Gemfile` and `config.ru` instead of `package.json`. Requires Ruby and the Rack gem. Node-based tooling will not detect it. |

---

## 🌈 Technology Diversity

The Parody Stack intentionally uses a wide variety of technologies to stress-test detection and monitoring tools.

### Frontend Frameworks

| Framework | Projects |
|-----------|----------|
| **Vue 3** | Lotion, Nestflix (frontend) |
| **React** | Snack, AirBeanBean (frontend), CornHub (frontend) |
| **Angular** | TubeYou |
| **SvelteKit / Svelte** | SpotiPie, Finder |
| **SolidJS** | DocuSwine |
| **Next.js** | Strife, GitPub |
| **Static HTML** | CatTranslator, AltaVistaBaby (frontend) |
| **PHP** | MySpice |

### Backend Frameworks / Runtimes

| Runtime / Framework | Projects |
|---------------------|----------|
| **Express (Node.js)** | Nestflix (API), CornHub (backend), DropBlox, OnlyFarms, SubSnack, BeerFinder, RockNRoll, Faceplant, MemEater, CPUStorm, Waiter.com, HidenSeek |
| **Fastify (Node.js)** | AirBeanBean (API) |
| **Next.js (Node.js)** | Strife, GitPub |
| **Vite Dev Server** | Lotion, Snack, DocuSwine, Finder |
| **SvelteKit** | SpotiPie |
| **Angular CLI** | TubeYou |
| **PHP built-in server** | MySpice |
| **Ruby (Rack)** | Napper |
| **COBOL (GnuCOBOL)** | AltaVistaBaby |
| **Docker Compose** | Locker |

### Package Managers

| Manager | Projects |
|---------|----------|
| **npm** | Lotion, Snack, TubeYou, SpotiPie, Strife, DocuSwine, CornHub, DropBlox, OnlyFarms, SubSnack, Finder, BeerFinder, RockNRoll, Faceplant, MemEater, CPUStorm, Waiter.com, HidenSeek |
| **pnpm** | Nestflix, AirBeanBean, GitPub |
| **Bundler (Ruby)** | Napper |
| **None** | CatTranslator, AltaVistaBaby, MySpice, Locker |

### Port Ranges

| Range | Projects | Notes |
|-------|----------|-------|
| **4321** | BeerFinder | Non-standard, outside main range |
| **5173** | Finder | Vite default port |
| **5301–5315** | Original 11 projects | Main port range, includes conflict on 5301 |
| **5320–5335** | New 15 projects | Extended range for new additions |
| **None** | CatTranslator, AltaVistaBaby | Static files, no server |

---

## ✅ Detection Checklist

A quick reference for what PortScout should be able to detect for each project category:

### Standard Projects (Snack, TubeYou, Strife, DocuSwine, Finder, BeerFinder)
- [x] Detect `package.json` and identify framework
- [x] Determine correct dev command
- [x] Identify configured port
- [x] Health check returns HTTP 200

### Monorepos (Nestflix, AirBeanBean, GitPub)
- [x] Detect `pnpm-workspace.yaml`
- [x] Identify multiple `package.json` files
- [x] Track multiple ports per project
- [x] Use `pnpm dev` instead of `npm run dev`

### Conflict Projects (Lotion + SpotiPie)
- [x] Detect that two projects share port 5301
- [x] Warn about port conflict before starting both
- [x] Detect SpotiPie's additional WebSocket port (5311)

### Crash/Failure Projects (Faceplant, Locker)
- [x] Handle process exit gracefully (Faceplant)
- [x] Detect Docker Compose errors (Locker)
- [x] Retry or report crash without hanging

### Resource Hog Projects (MemEater, CPUStorm)
- [x] Detect abnormal memory growth (MemEater)
- [x] Detect CPU spikes (CPUStorm)
- [x] Optionally warn about resource consumption

### Non-Node Projects (MySpice, AltaVistaBaby, Napper, CatTranslator)
- [x] Detect absence of `package.json`
- [x] Identify alternative project markers (`index.php`, `Gemfile`, `search.cob`, `index.html`)
- [x] Handle gracefully when no dev server can be started

### Hidden Behavior Projects (Waiter.com, SubSnack, RockNRoll, HidenSeek, OnlyFarms)
- [x] Handle slow/delayed HTTP responses (Waiter.com)
- [x] Find deeply nested entry points (SubSnack)
- [x] Handle non-deterministic status codes (HidenSeek)
- [x] Track multiple processes from single start command (OnlyFarms)

---

<p align="center">
  <i>If all 26 projects pass your tests, your tool is ready for anything. Except maybe production.</i>
</p>
