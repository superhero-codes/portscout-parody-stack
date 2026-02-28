const express = require('express');
const app = express();
const PORT = 5330;

// 🍽️ The Memory Leak — an ever-growing array that never gets garbage collected
const memoryBlackHole = [];
let leakCount = 0;

function eatMemory() {
	// Add ~1MB of data every 5 seconds
	const chunk = {
		id: leakCount++,
		timestamp: new Date().toISOString(),
		data: Buffer.alloc(1024 * 1024, 'M').toString(), // 1MB string of 'M's
		message: `Memory chunk #${leakCount}. This will never be freed. Ever.`,
	};
	memoryBlackHole.push(chunk);

	const used = process.memoryUsage();
	const heapMB = (used.heapUsed / 1024 / 1024).toFixed(2);
	const rssMB = (used.rss / 1024 / 1024).toFixed(2);

	console.log(
		`🍽️ [MemEater:${PORT}] Chunks: ${memoryBlackHole.length} | Heap: ${heapMB} MB | RSS: ${rssMB} MB | Status: Still hungry`,
	);
}

// Start eating memory every 5 seconds
setInterval(eatMemory, 5000);

app.get('/api/status', (req, res) => {
	const used = process.memoryUsage();
	res.json({
		service: 'MemEater',
		port: PORT,
		chunksStored: memoryBlackHole.length,
		memory: {
			heapUsed: (used.heapUsed / 1024 / 1024).toFixed(2) + ' MB',
			heapTotal: (used.heapTotal / 1024 / 1024).toFixed(2) + ' MB',
			rss: (used.rss / 1024 / 1024).toFixed(2) + ' MB',
			external: (used.external / 1024 / 1024).toFixed(2) + ' MB',
		},
		appetite: 'insatiable',
		willItStop: 'no',
		shouldYouBeWorried: 'yes',
	});
});

app.get('/', (req, res) => {
	const used = process.memoryUsage();
	const heapMB = (used.heapUsed / 1024 / 1024).toFixed(2);
	res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>MemEater — Om Nom Nom</title>
      <style>
        body { font-family: monospace; background: #0a0a0a; color: #00ff00; padding: 40px; }
        h1 { font-size: 2rem; margin-bottom: 20px; }
        .stats { background: #111; padding: 20px; border-radius: 8px; border: 1px solid #00ff00; }
        .stat { margin: 8px 0; }
        .warning { color: #ff4444; margin-top: 20px; }
        .bar { height: 20px; background: #003300; border-radius: 4px; margin: 8px 0; overflow: hidden; }
        .bar-fill { height: 100%; background: #00ff00; transition: width 1s; }
      </style>
    </head>
    <body>
      <h1>🍽️ MemEater</h1>
      <p>Eating memory since startup. Currently at ${heapMB} MB and growing.</p>
      <div class="stats">
        <div class="stat">📦 Chunks stored: ${memoryBlackHole.length}</div>
        <div class="stat">💾 Heap used: ${heapMB} MB</div>
        <div class="stat">🔄 Leak rate: ~1 MB every 5 seconds</div>
        <div class="stat">🛑 Will it stop: No</div>
      </div>
      <p class="warning">⚠️ This app intentionally leaks memory. Kill it before your system does.</p>
      <p style="margin-top:20px;color:#555;font-size:12px;">
        Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack" style="color:#00ff00;">PortScout Parody Stack</a>
      </p>
      <script>setTimeout(() => location.reload(), 5000);</script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
	console.log(`🍽️ MemEater running on port ${PORT}`);
	console.log(`🍽️ Eating ~1MB of memory every 5 seconds`);
	console.log(`🍽️ Visit http://localhost:${PORT} to watch the carnage`);
	console.log(`🍽️ Pro tip: Kill this before your OS does`);
});
