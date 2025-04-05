// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

const API_KEY = 'AIzaSyBgCE6LhsU0GCFiumi-bKB0GeBZQm_pVIs'; // cheia ta API
const MAX_RESULTS = 10;

app.get('/api/youtube-music-pop', async (req, res) => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=pop+music&type=video&order=viewCount&maxResults=${MAX_RESULTS}&key=${API_KEY}`);
    const data = await response.json();
    res.json(data.items);
  } catch (err) {
    console.error('Eroare la preluarea melodiilor Pop:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Serverul rulează la http://localhost:3001');
});
