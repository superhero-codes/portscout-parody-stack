// DropBlox - Dropbox Parody API
// Simple Express server for PortScout demo

import express from 'express';

const app = express();
const PORT = 5315;

app.use(express.json());

// Mock files data
const files = [
	{
		id: '1',
		name: 'important_document.pdf',
		size: '2.4 MB',
		modified: '2024-01-15',
	},
	{
		id: '2',
		name: 'family_photo.jpg',
		size: '4.1 MB',
		modified: '2024-01-14',
	},
	{ id: '3', name: 'backup.zip', size: '156 MB', modified: '2024-01-10' },
	{ id: '4', name: 'notes.txt', size: '12 KB', modified: '2024-01-08' },
	{
		id: '5',
		name: 'meme_collection/',
		size: '—',
		modified: '2024-01-01',
		type: 'folder',
	},
];

// API Routes
app.get('/', (req, res) => {
	res.json({
		name: 'DropBlox API',
		version: '1.0.0',
		message: '☁️ Store your files in the cloud (we promise theyre safe)',
		endpoints: {
			files: '/api/files',
			storage: '/api/storage',
			upload: '/api/upload (POST)',
		},
	});
});

app.get('/api/files', (req, res) => {
	res.json({
		success: true,
		files: files,
		total: files.length,
	});
});

app.get('/api/files/:id', (req, res) => {
	const file = files.find((f) => f.id === req.params.id);
	if (file) {
		res.json({ success: true, file });
	} else {
		res.status(404).json({
			success: false,
			error: 'File not found (maybe it was "synced")',
		});
	}
});

app.get('/api/storage', (req, res) => {
	res.json({
		used: '13.37 GB',
		total: '15.00 GB',
		percentage: 89,
		message: 'Almost full! Upgrade to DropBlox Pro for just $9.99/month',
	});
});

app.post('/api/upload', (req, res) => {
	res.json({
		success: true,
		message: 'File uploaded successfully (not really, this is a demo)',
		fileId: Math.random().toString(36).substr(2, 9),
	});
});

app.listen(PORT, () => {
	console.log(`☁️  DropBlox API running on http://localhost:${PORT}`);
	console.log(`   Endpoints: /, /api/files, /api/storage`);
});
