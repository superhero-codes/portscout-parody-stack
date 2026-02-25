#!/bin/bash
# PortScout Parody Stack - Start All Projects
# Best-effort script to start all demo projects

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PROJECTS_DIR="$ROOT_DIR/projects"

echo "🚀 Starting PortScout Parody Stack..."
echo "================================================"

# Store PIDs for cleanup
PIDS=()

cleanup() {
  echo ""
  echo "🛑 Stopping all projects..."
  for pid in "${PIDS[@]}"; do
    kill "$pid" 2>/dev/null || true
  done
  echo "✅ All projects stopped."
  exit 0
}

trap cleanup SIGINT SIGTERM

# 1. Lotion (Vue + Vite) - Port 5301
echo "📝 Starting Lotion (port 5301)..."
cd "$PROJECTS_DIR/lotion" && npm run dev &
PIDS+=($!)

# 2. Snack (React + Vite) - Port 5302
echo "🥨 Starting Snack (port 5302)..."
cd "$PROJECTS_DIR/snack" && npm run dev &
PIDS+=($!)

# 3. TubeYou (Angular) - Port 5303
echo "▶️  Starting TubeYou (port 5303)..."
cd "$PROJECTS_DIR/tubeyou" && npm start &
PIDS+=($!)

# 4. SpotiPie (SvelteKit) - Port 5301 (CONFLICT!) + WS 5311
# NOTE: This will conflict with Lotion on port 5301
echo "🥧 Starting SpotiPie (port 5301 CONFLICT + WS 5311)..."
cd "$PROJECTS_DIR/spotipie" && npm run dev:all &
PIDS+=($!)

# 5. Strife (Next.js) - Port 5305
echo "💳 Starting Strife (port 5305)..."
cd "$PROJECTS_DIR/strife" && npm run dev &
PIDS+=($!)

# 6. Nestflix Monorepo - Ports 5306, 5312
echo "🎬 Starting Nestflix (ports 5306, 5312)..."
cd "$PROJECTS_DIR/nestflix" && pnpm dev &
PIDS+=($!)

# 7. AirBeanBean Monorepo - Ports 5307, 5313
echo "☕ Starting AirBeanBean (ports 5307, 5313)..."
cd "$PROJECTS_DIR/airbeanbean" && pnpm dev &
PIDS+=($!)

# 8. GitPub Monorepo - Port 5308
echo "🍺 Starting GitPub (port 5308)..."
cd "$PROJECTS_DIR/gitpub" && pnpm dev &
PIDS+=($!)

# 9. DocuSwine (SolidJS) - Port 5309
echo "🐷 Starting DocuSwine (port 5309)..."
cd "$PROJECTS_DIR/docuswine" && npm run dev &
PIDS+=($!)

# 10. CornHub - Ports 5310, 5314
echo "🌽 Starting CornHub (ports 5310, 5314)..."
cd "$PROJECTS_DIR/cornhub" && npm run dev &
PIDS+=($!)

# 11. DropBlox (Node API) - Port 5315
echo "☁️  Starting DropBlox (port 5315)..."
cd "$PROJECTS_DIR/dropblox" && npm start &
PIDS+=($!)

echo ""
echo "================================================"
echo "✅ All projects starting!"
echo ""
echo "⚠️  Note: Lotion and SpotiPie both use port 5301 (intentional conflict)"
echo "🐌 CornHub backend has a 2.5s startup delay"
echo ""
echo "Press Ctrl+C to stop all projects."
echo "================================================"

# Wait for all background processes
wait
