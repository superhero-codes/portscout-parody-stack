const express = require('express');

const app = express();
const PORT = 5335;

app.use(express.json());

const leaks = {
	strings: [],
	buffers: [],
	objects: [],
};

let leakEvents = 0;
let totalLeakedBytesApprox = 0;

function leakChunk(bytes = 1024 * 1024) {
	const bufferChunk = Buffer.alloc(bytes, 'x');
	const stringChunk = 'doom'.repeat(Math.max(1, Math.floor(bytes / 4)));
	const objectChunk = {
		createdAt: Date.now(),
		marker: Math.random().toString(36).slice(2),
		payload: new Array(4000).fill({ omen: 'heap-rising' }),
	};

	leaks.buffers.push(bufferChunk);
	leaks.strings.push(stringChunk);
	leaks.objects.push(objectChunk);

	leakEvents += 1;
	totalLeakedBytesApprox += bytes * 2;
}

setInterval(() => {
	leakChunk(256 * 1024);
}, 1500);

app.get('/', (_req, res) => {
	res.json({
		name: 'heapocalypse',
		status: 'running',
		message:
			'Memory leak simulation active. This is intentional test chaos.',
	});
});

app.get('/leak', (req, res) => {
	const mb = Number.parseInt(req.query.mb, 10);
	const chunkMb = Number.isFinite(mb) && mb > 0 ? Math.min(mb, 256) : 5;

	for (let i = 0; i < chunkMb; i += 1) {
		leakChunk(1024 * 1024);
	}

	res.json({
		ok: true,
		action: 'leak',
		leakedMbApprox: chunkMb,
		leakEvents,
	});
});

app.post('/burst', (req, res) => {
	const bursts = Number.parseInt(req.body?.bursts, 10);
	const burstCount =
		Number.isFinite(bursts) && bursts > 0 ? Math.min(bursts, 50) : 10;

	for (let i = 0; i < burstCount; i += 1) {
		leakChunk(2 * 1024 * 1024);
	}

	res.json({
		ok: true,
		action: 'burst',
		burstCount,
		leakEvents,
	});
});

app.get('/stats', (_req, res) => {
	const mem = process.memoryUsage();
	res.json({
		pid: process.pid,
		uptimeSeconds: Math.round(process.uptime()),
		leakEvents,
		retainedChunks: {
			strings: leaks.strings.length,
			buffers: leaks.buffers.length,
			objects: leaks.objects.length,
		},
		approxLeakedMb: Math.round(totalLeakedBytesApprox / (1024 * 1024)),
		memory: {
			rss: mem.rss,
			heapTotal: mem.heapTotal,
			heapUsed: mem.heapUsed,
			external: mem.external,
			arrayBuffers: mem.arrayBuffers,
		},
	});
});

app.listen(PORT, () => {
	console.log(`heapocalypse leaking on http://localhost:${PORT}`);
});
