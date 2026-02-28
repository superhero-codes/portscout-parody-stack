const { fork } = require('child_process');
const path = require('path');

console.log('🌾 OnlyFarms — Starting all processes...');
console.log('=========================================');
console.log('');

const processes = [
	{ file: 'server.js', name: 'Main Server', port: 5320 },
	{ file: 'worker.js', name: 'Background Worker', port: 5321 },
	{ file: 'analytics.js', name: 'Analytics Engine', port: 5322 },
];

const children = [];

processes.forEach(({ file, name, port }) => {
	const child = fork(path.join(__dirname, file));
	children.push(child);

	child.on('error', (err) => {
		console.error(`[${name}] Error: ${err.message}`);
	});

	child.on('exit', (code) => {
		console.log(`[${name}] Process exited with code ${code}`);
	});
});

process.on('SIGINT', () => {
	console.log('\n🌾 OnlyFarms — Shutting down all processes...');
	children.forEach((child) => child.kill());
	process.exit(0);
});

process.on('SIGTERM', () => {
	children.forEach((child) => child.kill());
	process.exit(0);
});

console.log(`🌾 OnlyFarms is running with ${processes.length} processes!`);
console.log('');
console.log('  Main Server:      http://localhost:5320');
console.log('  Worker Status:    http://localhost:5321/api/worker/status');
console.log('  Analytics:        http://localhost:5322/api/analytics');
console.log('');
console.log('Wait, which port was the main one again? 🤔');
