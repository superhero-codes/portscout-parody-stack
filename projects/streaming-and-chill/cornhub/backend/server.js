// CornHub Backend - Express Server with intentional slow endpoint
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5314;

app.use(cors());
app.use(express.json());

// Simulate slow startup (2-3 seconds)
console.log('🌽 CornHub backend starting up...');
console.log('⏳ Initializing corn database (this takes a moment)...');

await new Promise((resolve) => setTimeout(resolve, 2500));

console.log('✅ Corn database ready!');

const cornContent = [
	{ id: 1, title: 'Premium Golden Corn', views: 4200000, rating: 98 },
	{ id: 2, title: 'Sweet Baby Corn Collection', views: 2100000, rating: 95 },
	{ id: 3, title: 'Corn on the Cob Masterclass', views: 1800000, rating: 92 },
];

app.get('/', (req, res) => {
	res.json({
		name: 'CornHub API',
		version: '1.0.0',
		message: "🌽 The world's #1 corn content API",
		endpoints: {
			content: '/api/content',
			slow: '/api/slow (intentionally delayed 2-3s)',
		},
	});
});

app.get('/api/content', (req, res) => {
	res.json({ success: true, content: cornContent });
});

// INTENTIONALLY SLOW ENDPOINT - 2-3 second delay
app.get('/api/slow', async (req, res) => {
	const delay = 2000 + Math.random() * 1000; // 2-3 seconds
	console.log(`🐌 Slow endpoint called, delaying ${Math.round(delay)}ms...`);
	await new Promise((resolve) => setTimeout(resolve, delay));
	res.json({
		success: true,
		message:
			'This response was intentionally delayed to demonstrate loading states',
		delay: `${Math.round(delay)}ms`,
		data: {
			featured: 'Premium Golden Corn',
			recommendation: 'You might also enjoy: Buttered Corn Deluxe',
		},
	});
});

app.listen(PORT, () => {
	console.log(`🌽 CornHub API running on http://localhost:${PORT}`);
	console.log(`   Slow endpoint: http://localhost:${PORT}/api/slow`);
});
