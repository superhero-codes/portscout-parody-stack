const express = require('express');
const path = require('path');
const app = express();
const PORT = 5323;

// SubSnack — the newsletter platform buried 6 levels deep
const newsletters = [
	{
		id: 1,
		title: 'Why Pretzels Are the Superior Snack',
		author: 'Crunchy McSaltface',
		date: 'Feb 28, 2026',
		excerpt:
			'In this 4,000-word essay, I will explain why the humble pretzel deserves a Nobel Prize. The twist shape alone is an engineering marvel...',
		readTime: '12 min read',
		likes: 2847,
		free: true,
	},
	{
		id: 2,
		title: 'The Great Chip Debate: Ridged vs Flat',
		author: 'Dr. Snacksworth',
		date: 'Feb 25, 2026',
		excerpt:
			'For centuries, humanity has been divided. Not by politics or religion, but by chip topology. Today, we settle this once and for all...',
		readTime: '8 min read',
		likes: 5123,
		free: true,
	},
	{
		id: 3,
		title: 'I Ate Nothing But Goldfish Crackers for 30 Days',
		author: 'Snack Journalist',
		date: 'Feb 20, 2026',
		excerpt:
			'Day 1: Optimistic. Day 15: The crackers smile back. Day 30: I have become one with the cheddar...',
		readTime: '15 min read',
		likes: 8901,
		free: false,
	},
	{
		id: 4,
		title: 'Trail Mix: A Conspiracy Theory',
		author: 'The Snack Truther',
		date: 'Feb 18, 2026',
		excerpt:
			'Why does trail mix always have raisins? Who decided this? Follow the money. Follow the raisins...',
		readTime: '6 min read',
		likes: 3456,
		free: false,
	},
	{
		id: 5,
		title: 'An Open Letter to People Who Eat Loud Snacks in Meetings',
		author: 'Anonymous (but we all know who)',
		date: 'Feb 15, 2026',
		excerpt:
			'Dear Karen from Accounting, your baby carrots are not as quiet as you think they are...',
		readTime: '3 min read',
		likes: 12045,
		free: true,
	},
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/newsletters', (req, res) => {
	console.log(`[SubSnack:${PORT}] Newsletters requested from depth level 6`);
	res.json(newsletters);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`📰 SubSnack running on port ${PORT}`);
	console.log(`📰 Server located at: app/core/platform/runtime/web/server/`);
	console.log(`📰 Good luck finding it again.`);
});
