const express = require('express');
const path = require('path');
const app = express();
const PORT = 5324;

app.use(express.static(path.join(__dirname, 'public')));

// Every route redirects to the main page (you can't escape)
app.get('/escape', (req, res) => {
	console.log(`[RockNRoll:${PORT}] Someone tried to escape. Nice try.`);
	res.redirect('/');
});

app.get('/exit', (req, res) => {
	console.log(`[RockNRoll:${PORT}] Exit? There is no exit.`);
	res.redirect('/');
});

app.get('/stop', (req, res) => {
	console.log(`[RockNRoll:${PORT}] Never gonna stop.`);
	res.redirect('/');
});

app.get('/api/lyrics', (req, res) => {
	res.json({
		lines: [
			"We're no strangers to code",
			'You know the rules and so do I',
			"A full deployment's what I'm thinking of",
			"You wouldn't get this from any other dev",
			'',
			"I just wanna tell you how I'm coding",
			'Gotta make you understand',
			'',
			'Never gonna give you up (time)',
			'Never gonna let you merge',
			'Never gonna run around and desert your PR',
			'Never gonna make you cry (in production)',
			'Never gonna say goodbye (to technical debt)',
			'Never gonna tell a lie and deploy on Friday',
		],
	});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`🎸 RockNRoll running on port ${PORT}`);
	console.log(`🎸 You know the rules, and so do I.`);
	console.log(
		`🎸 Visit http://localhost:${PORT} — you won't regret it. Or will you?`,
	);
});
