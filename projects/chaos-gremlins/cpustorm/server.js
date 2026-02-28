const express = require('express');
const os = require('os');
const app = express();
const PORT = 5331;

let spikeCount = 0;

function getCpuUsage() {
	const cpus = os.cpus();
	let totalIdle = 0,
		totalTick = 0;
	cpus.forEach((cpu) => {
		for (const type in cpu.times) {
			totalTick += cpu.times[type];
		}
		totalIdle += cpu.times.idle;
	});
	return {
		idle: totalIdle / cpus.length,
		total: totalTick / cpus.length,
		cores: cpus.length,
	};
}

// CPU spike simulation — runs a busy loop for 2 seconds every 5 seconds
function cpuSpike() {
	spikeCount++;
	const start = Date.now();
	const duration = 2000; // 2 second busy loop

	console.log(
		`⚡ [CPUStorm:${PORT}] Spike #${spikeCount} starting — busy loop for ${duration}ms`,
	);

	// Busy loop — this will peg one CPU core
	while (Date.now() - start < duration) {
		Math.random() * Math.random() * Math.random();
	}

	const cpuInfo = getCpuUsage();
	console.log(
		`⚡ [CPUStorm:${PORT}] Spike #${spikeCount} complete — ${cpuInfo.cores} cores available, all of them annoyed`,
	);
}

// Spike every 5 seconds
setInterval(cpuSpike, 5000);

app.get('/api/status', (req, res) => {
	const cpuInfo = getCpuUsage();
	res.json({
		service: 'CPUStorm',
		port: PORT,
		spikesTriggered: spikeCount,
		spikeDuration: '2 seconds',
		spikeInterval: '5 seconds',
		cores: cpuInfo.cores,
		uptime: process.uptime().toFixed(0) + 's',
		fanSpeed: 'maximum',
		laptopTemperature: 'concerning',
	});
});

app.get('/', (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CPUStorm — ⚡</title>
      <style>
        body { font-family: monospace; background: #0a0a0a; color: #ff6600; padding: 40px; }
        h1 { font-size: 2rem; margin-bottom: 20px; }
        .stats { background: #111; padding: 20px; border-radius: 8px; border: 1px solid #ff6600; }
        .stat { margin: 8px 0; }
        .warning { color: #ff4444; margin-top: 20px; font-weight: bold; }
        .pulse { animation: pulse 1s ease-in-out infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      </style>
    </head>
    <body>
      <h1>⚡ CPUStorm</h1>
      <p>Making your CPU wish it had stayed in bed since startup.</p>
      <div class="stats">
        <div class="stat">🔥 Spikes triggered: ${spikeCount}</div>
        <div class="stat">⏱️ Spike duration: 2 seconds</div>
        <div class="stat">🔄 Spike interval: every 5 seconds</div>
        <div class="stat">💻 CPU cores: ${os.cpus().length}</div>
        <div class="stat">⏰ Uptime: ${process.uptime().toFixed(0)}s</div>
      </div>
      <p class="warning pulse">⚠️ This app intentionally spikes CPU usage. Your fans will thank you for stopping it.</p>
      <p style="margin-top:20px;color:#555;font-size:12px;">
        Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack" style="color:#ff6600;">PortScout Parody Stack</a>
      </p>
      <script>setTimeout(() => location.reload(), 5000);</script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
	console.log(`⚡ CPUStorm running on port ${PORT}`);
	console.log(`⚡ Spiking CPU for 2s every 5s`);
	console.log(`⚡ Visit http://localhost:${PORT} to watch the storm`);
	console.log(`⚡ Your fans are about to get a workout`);
});
