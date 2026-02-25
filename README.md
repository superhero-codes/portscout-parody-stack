# PortScout Parody Stack

A collection of ~11 demo/test projects covering a wide range of real technologies, designed for screenshots, demo videos, and validating [PortScout](https://github.com/your-org/portscout) across stacks.

## Project Matrix

| #   | Project         | Parodies | Stack                       | Port(s)       | Dev Command       | Notes                                      |
| --- | --------------- | -------- | --------------------------- | ------------- | ----------------- | ------------------------------------------ |
| 1   | **Lotion**      | Notion   | Vue 3 + Vite                | 5301          | `npm run dev`     | ⚠️ Port conflict with SpotiPie             |
| 2   | **Snack**       | Slack    | React + Vite                | 5302          | `npm run dev`     |                                            |
| 3   | **TubeYou**     | YouTube  | Angular CLI                 | 5303          | `npm start`       |                                            |
| 4   | **SpotiPie**    | Spotify  | SvelteKit + WS              | 5301, WS:5311 | `npm run dev:all` | ⚠️ Port conflict with Lotion, 🔌 WebSocket |
| 5   | **Strife**      | Stripe   | Next.js                     | 5305          | `npm run dev`     |                                            |
| 6   | **Nestflix**    | Netflix  | Vue + Express (monorepo)    | 5306, 5312    | `pnpm dev`        | 📦 Monorepo                                |
| 7   | **AirBeanBean** | Airbnb   | React + Fastify (monorepo)  | 5307, 5313    | `pnpm dev`        | 📦 Monorepo                                |
| 8   | **GitPub**      | GitHub   | Next.js + Prisma (monorepo) | 5308          | `pnpm dev`        | 📦 Monorepo                                |
| 9   | **DocuSwine**   | DocuSign | SolidJS + Vite              | 5309          | `npm run dev`     |                                            |
| 10  | **CornHub**     | 🌽       | React + Express             | 5310, 5314    | `npm run dev`     | 🐌 Slow-start backend                      |
| 11  | **DropBlox**    | Dropbox  | Node + Docker               | 5315          | `npm start`       | 🐳 Docker                                  |

## Special Scenarios

| Scenario          | Project(s)                    | Details                                          |
| ----------------- | ----------------------------- | ------------------------------------------------ |
| **Port Conflict** | Lotion + SpotiPie             | Both configured for port 5301                    |
| **WebSocket**     | SpotiPie                      | WS server on port 5311                           |
| **Slow Start**    | CornHub                       | Backend has 2.5s startup delay + slow endpoint   |
| **Docker**        | DropBlox                      | Includes Dockerfile, runnable via Docker or Node |
| **Monorepos**     | Nestflix, AirBeanBean, GitPub | pnpm workspaces                                  |

## Port Map (5301–5315)

```
5301 - Lotion (Vue) ⚠️ CONFLICT
5301 - SpotiPie (SvelteKit) ⚠️ CONFLICT
5302 - Snack (React)
5303 - TubeYou (Angular)
5304 - (reserved)
5305 - Strife (Next.js)
5306 - Nestflix Web (Vue)
5307 - AirBeanBean Web (React)
5308 - GitPub Web (Next.js)
5309 - DocuSwine (SolidJS)
5310 - CornHub Frontend (React)
5311 - SpotiPie WS Server
5312 - Nestflix API (Express)
5313 - AirBeanBean API (Fastify)
5314 - CornHub Backend (Express) 🐌
5315 - DropBlox API (Express) 🐳
```

## Quick Start

### Individual Projects

```bash
cd projects/<project-name>
npm install   # or pnpm install for monorepos
npm run dev   # or pnpm dev for monorepos
```

### All Projects (best effort)

```bash
./scripts/start-all.sh
./scripts/stop-all.sh
```

## Branding

All web UIs include the PortScout attribution footer per [`branding/footer.html`](branding/footer.html). See [`branding/README.md`](branding/README.md) for guidelines.

## Attribution

See [ATTRIBUTION.md](ATTRIBUTION.md) for full attribution details.

## License

See [LICENSE](LICENSE).
