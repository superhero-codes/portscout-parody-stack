// SpotiPie WebSocket Server
// Runs on port 5311 to demonstrate WebSocket support in PortScout

import { WebSocketServer } from 'ws';

const PORT = 5311;

const wss = new WebSocketServer({ port: PORT });

console.log(`🎵 SpotiPie WebSocket Server running on ws://localhost:${PORT}`);

wss.on('connection', (ws) => {
	console.log('Client connected to SpotiPie WS');

	// Send a welcome message
	ws.send(
		JSON.stringify({
			type: 'welcome',
			message: 'Connected to SpotiPie real-time updates',
			timestamp: new Date().toISOString(),
		}),
	);

	// Simulate "now playing" updates every 5 seconds
	const tracks = [
		{ title: 'undefined.mp3', artist: 'NaN Artist' },
		{ title: 'async/await', artist: 'Promise Chain' },
		{ title: 'Git Push --force', artist: 'Oopsie Daisy' },
		{ title: 'It Works on My Machine', artist: 'DevOps Denial' },
	];

	let trackIndex = 0;
	const interval = setInterval(() => {
		const track = tracks[trackIndex % tracks.length];
		ws.send(
			JSON.stringify({
				type: 'now_playing',
				track: track,
				timestamp: new Date().toISOString(),
			}),
		);
		trackIndex++;
	}, 5000);

	ws.on('message', (data) => {
		console.log('Received:', data.toString());
		// Echo back for demo purposes
		ws.send(
			JSON.stringify({
				type: 'echo',
				original: data.toString(),
				timestamp: new Date().toISOString(),
			}),
		);
	});

	ws.on('close', () => {
		console.log('Client disconnected');
		clearInterval(interval);
	});
});

wss.on('error', (error) => {
	console.error('WebSocket server error:', error);
});
