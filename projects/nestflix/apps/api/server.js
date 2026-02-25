// Nestflix API - Express Server
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5312;

app.use(cors());
app.use(express.json());

const shows = [
	{ id: 1, title: 'Stranger Bugs', genre: 'Horror', rating: 98 },
	{ id: 2, title: 'The Merge Conflict', genre: 'Drama', rating: 87 },
	{ id: 3, title: 'Breaking Build', genre: 'Thriller', rating: 95 },
	{ id: 4, title: 'House of Containers', genre: 'Political', rating: 91 },
	{ id: 5, title: 'Orange is the New Stack', genre: 'Comedy', rating: 82 },
];

app.get('/', (req, res) => {
	res.json({
		name: 'Nestflix API',
		version: '1.0.0',
		message: '🎬 Stream your favorite dev shows',
	});
});

app.get('/api/shows', (req, res) => {
	res.json({ success: true, shows });
});

app.get('/api/shows/:id', (req, res) => {
	const show = shows.find((s) => s.id === parseInt(req.params.id));
	if (show) {
		res.json({ success: true, show });
	} else {
		res.status(404).json({ success: false, error: 'Show not found' });
	}
});

app.listen(PORT, () => {
	console.log(`🎬 Nestflix API running on http://localhost:${PORT}`);
});
