#!/bin/bash
# PortScout Parody Stack - Stop All Projects
# Kills processes on all demo ports

echo "🛑 Stopping PortScout Parody Stack..."
echo "================================================"

PORTS=(5301 5302 5303 5305 5306 5307 5308 5309 5310 5311 5312 5313 5314 5315)

for port in "${PORTS[@]}"; do
  pid=$(lsof -ti :$port 2>/dev/null)
  if [ -n "$pid" ]; then
    echo "  Killing process on port $port (PID: $pid)"
    kill $pid 2>/dev/null || true
  fi
done

echo ""
echo "✅ All demo ports cleared."
echo "================================================"
