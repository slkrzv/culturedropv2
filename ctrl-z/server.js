const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/top-songs', async (req, res) => {
  try {
    const response = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=100/json');
    const data = await response.json();
    res.json(data.results);
  } catch (err) {
    console.error('Eroare la preluarea melodiilor:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Serverul rulează la http://localhost:3001');
});
