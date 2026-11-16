// SIT725 3.2P: Express server for the Locate a Socket prototype.
const express = require('express');
const path = require('path');
const chargers = require('./data/chargers');

const app = express();
const port = process.env.PORT || 3000;

// Serve HTML, CSS, client-side JavaScript and SVG images from /public.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// The browser requests this GET endpoint to populate the cards.
app.get('/api/chargers', (req, res) => {
  res.json(chargers);
});

// A small endpoint to confirm that Express is responding.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', application: 'Locate a Socket (prototype)' });
});

app.listen(port, () => {
  console.log(`Locate a Socket is running at http://localhost:${port}`);
});
