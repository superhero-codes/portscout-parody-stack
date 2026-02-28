package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"runtime"
	"sync/atomic"
	"time"
)

const (
	port          = 5331
	spikeInterval = 5 * time.Second
	spikeDuration = 2 * time.Second
)

var (
	spikeCount int64
	startedAt  = time.Now()
)

type statusResponse struct {
	Service         string `json:"service"`
	Port            int    `json:"port"`
	Spikes          int64  `json:"spikes"`
	UptimeSeconds   int64  `json:"uptimeSeconds"`
	SpikeDuration   string `json:"spikeDuration"`
	SpikeInterval   string `json:"spikeInterval"`
	FanSpeed        string `json:"fanSpeed"`
	TemperatureMood string `json:"temperatureMood"`
}

func runCPUStorm() {
	ticker := time.NewTicker(spikeInterval)
	defer ticker.Stop()

	for range ticker.C {
		current := atomic.AddInt64(&spikeCount, 1)
		start := time.Now()

		log.Printf("⚡ [CPUStorm:%d] Spike #%d starting — busy loop for %dms", port, current, spikeDuration.Milliseconds())

		for time.Since(start) < spikeDuration {
			_ = 12345 * 67890
		}

		log.Printf("⚡ [CPUStorm:%d] Spike #%d complete — %d cores available, all of them annoyed", port, current, runtime.NumCPU())
	}
}

func handleStatus(w http.ResponseWriter, _ *http.Request) {
	resp := statusResponse{
		Service:         "CPUStorm",
		Port:            port,
		Spikes:          atomic.LoadInt64(&spikeCount),
		UptimeSeconds:   int64(time.Since(startedAt).Seconds()),
		SpikeDuration:   "2 seconds",
		SpikeInterval:   "5 seconds",
		FanSpeed:        "maximum",
		TemperatureMood: "concerning",
	}

	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(resp)
}

func handleIndex(w http.ResponseWriter, _ *http.Request) {
	html := fmt.Sprintf(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CPUStorm — ⚡</title>
  <style>
    body { font-family: monospace; background: #0a0a0a; color: #ff6600; padding: 40px; }
    h1 { font-size: 2rem; margin-bottom: 20px; }
    .stats { background: #111; padding: 20px; border-radius: 8px; border: 1px solid #ff6600; }
    .stat { margin: 8px 0; }
    .warning { color: #ff4444; margin-top: 20px; font-weight: bold; }
    .pulse { animation: pulse 1s ease-in-out infinite; }
    @keyframes pulse { 0%%, 100%% { opacity: 1; } 50%% { opacity: 0.5; } }
  </style>
</head>
<body>
  <h1>⚡ CPUStorm</h1>
  <p>Making your CPU wish it had stayed in bed since startup.</p>
  <div class="stats">
    <div class="stat">🔥 Spikes triggered: %d</div>
    <div class="stat">⏱️ Spike duration: 2 seconds</div>
    <div class="stat">🔄 Spike interval: every 5 seconds</div>
    <div class="stat">💻 CPU cores: %d</div>
    <div class="stat">⏰ Uptime: %ds</div>
  </div>
  <p class="warning pulse">⚠️ This app intentionally spikes CPU usage. Your fans will thank you for stopping it.</p>
  <script>setTimeout(() => location.reload(), 5000);</script>
</body>
</html>`, atomic.LoadInt64(&spikeCount), runtime.NumCPU(), int64(time.Since(startedAt).Seconds()))

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	_, _ = w.Write([]byte(html))
}

func main() {
	http.HandleFunc("/", handleIndex)
	http.HandleFunc("/api/status", handleStatus)

	go runCPUStorm()

	log.Printf("⚡ CPUStorm running on port %d", port)
	log.Printf("⚡ Spiking CPU for 2s every 5s")
	log.Printf("⚡ Visit http://localhost:%d to watch the storm", port)
	log.Printf("⚡ Conflict story intact: Napper (Ruby) also claims %d in this parody stack", port)

	addr := fmt.Sprintf(":%d", port)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("CPUStorm failed: %v", err)
	}
}
