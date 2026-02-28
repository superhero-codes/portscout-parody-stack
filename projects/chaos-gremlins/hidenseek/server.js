const express = require('express');
const app = express();
const PORT = 5333;

const statusCodes = [
	{
		code: 200,
		emoji: '✅',
		message: 'OK — You found me! But can you find me again?',
	},
	{
		code: 404,
		emoji: '🔍',
		message: 'Not Found — I was here a second ago, I swear!',
	},
	{
		code: 500,
		emoji: '💥',
		message:
			'Internal Server Error — The server is having an existential crisis.',
	},
	{
		code: 418,
		emoji: '🫖',
		message:
			"I'm a teapot — Short and stout. This is my handle, this is my spout.",
	},
];

let requestCount = 0;
const history = [];

app.get('/', (req, res) => {
	requestCount++;
	const pick = statusCodes[Math.floor(Math.random() * statusCodes.length)];

	const entry = {
		request: requestCount,
		code: pick.code,
		emoji: pick.emoji,
		message: pick.message,
		timestamp: new Date().toISOString(),
	};
	history.unshift(entry);
	if (history.length > 20) history.pop();

	console.log(
		`🎲 [HidenSeek:${PORT}] Request #${requestCount} → ${pick.code} ${pick.emoji} ${pick.message}`,
	);

	res.status(pick.code).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>HidenSeek — ${pick.code}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0f0f0f;
          color: #e0e0e0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }
        .status-display {
          text-align: center;
          margin-bottom: 40px;
        }
        .status-emoji { font-size: 5rem; margin-bottom: 16px; }
        .status-code {
          font-size: 4rem;
          font-weight: 800;
          font-family: monospace;
          color: ${pick.code === 200 ? '#22c55e' : pick.code === 404 ? '#eab308' : pick.code === 500 ? '#ef4444' : '#06b6d4'};
        }
        .status-message {
          font-size: 1.1rem;
          color: #888;
          margin-top: 8px;
          max-width: 400px;
        }
        .refresh-btn {
          margin-top: 24px;
          padding: 12px 32px;
          background: #333;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
        }
        .refresh-btn:hover { background: #444; }
        .history {
          max-width: 500px;
          width: 100%;
          margin-top: 40px;
        }
        .history h3 { margin-bottom: 12px; color: #888; font-size: 14px; }
        .history-item {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #222;
          font-size: 14px;
          font-family: monospace;
        }
        .history-code { font-weight: 700; min-width: 40px; }
        .history-time { color: #555; margin-left: auto; font-size: 12px; }
        .footer-attr {
          margin-top: 40px;
          font-size: 12px;
          color: #444;
        }
        .footer-attr a { color: #888; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="status-display">
        <div class="status-emoji">${pick.emoji}</div>
        <div class="status-code">${pick.code}</div>
        <div class="status-message">${pick.message}</div>
        <button class="refresh-btn" onclick="location.reload()">🎲 Try Again</button>
        <p style="margin-top:12px;font-size:13px;color:#555;">Request #${requestCount}</p>
      </div>
      <div class="history">
        <h3>Recent Results</h3>
        ${history
			.map(
				(h) => `
          <div class="history-item">
            <span>${h.emoji}</span>
            <span class="history-code" style="color:${h.code === 200 ? '#22c55e' : h.code === 404 ? '#eab308' : h.code === 500 ? '#ef4444' : '#06b6d4'}">${h.code}</span>
            <span>${h.message.split('—')[0]}</span>
            <span class="history-time">#${h.request}</span>
          </div>
        `,
			)
			.join('')}
      </div>
      <div class="footer-attr">
        Part of the <a href="https://github.com/superhero-codes/portscout-parody-stack">PortScout Parody Stack</a> · 
        Every request is a surprise
      </div>
    </body>
    </html>
  `);
});

app.get('/api/status', (req, res) => {
	const pick = statusCodes[Math.floor(Math.random() * statusCodes.length)];
	requestCount++;
	console.log(
		`🎲 [HidenSeek:${PORT}] API Request #${requestCount} → ${pick.code}`,
	);
	res.status(pick.code).json({
		code: pick.code,
		message: pick.message,
		request: requestCount,
	});
});

app.listen(PORT, () => {
	console.log(`🎲 HidenSeek running on port ${PORT}`);
	console.log(
		`🎲 Every request returns a random status code: 200, 404, 500, or 418`,
	);
	console.log(`🎲 Visit http://localhost:${PORT} and try your luck`);
});
