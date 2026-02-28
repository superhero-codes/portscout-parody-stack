const express = require('express');
const app = express();
const PORT = 5321;

// Background worker that "processes" farm subscriptions
let processedCount = 0;

function processSubscriptions() {
	processedCount++;
	const tasks = [
		'Processing hay delivery order #' + Math.floor(Math.random() * 9999),
		'Verifying farmer identity for premium tier',
		'Calculating egg-to-subscriber ratio',
		'Optimizing barn layout algorithm',
		'Sending "fresh content" notification to 0 subscribers',
		'Reticulating splines (farm edition)',
		'Counting sheep (for sleep optimization)',
		'Defragmenting the silo database',
	];
	const task = tasks[Math.floor(Math.random() * tasks.length)];
	console.log(`[WORKER:${PORT}] Task #${processedCount}: ${task}`);
}

setInterval(processSubscriptions, 3000);

app.get('/api/worker/status', (req, res) => {
	console.log(`[WORKER:${PORT}] Status check at ${new Date().toISOString()}`);
	res.json({
		worker: 'OnlyFarms Background Worker',
		port: PORT,
		tasksProcessed: processedCount,
		status: 'churning butter',
		uptime: process.uptime(),
	});
});

app.listen(PORT, () => {
	console.log(
		`[WORKER] 🐄 OnlyFarms Background Worker running on port ${PORT}`,
	);
	console.log(`[WORKER] Processing farm subscriptions every 3 seconds...`);
});
