import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopPopSongs = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/youtube-music-pop');
        if (!response.ok) {
          throw new Error(`Eroare la fetch. Cod: ${response.status}`);
        }
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        setError(err.message);
        console.error('Eroare la preluarea melodiilor:', err);
      }
    };

    fetchTopPopSongs();
  }, []);

  return (
    <div className="container">
      <div className="navstyle">
        <nav>
          <h1 className="logo">Logo</h1>
          <ul>
            <li><a href="/">Acasă</a></li>
            <li><a href="/">Despre</a></li>
            <li><a href="/">Servicii</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </div>

      <section className="hero">
        {error && <p className="error-message">Eroare: {error}</p>}
        {songs.length === 0 && !error && <p className="loading-message">Se încarcă rezultatele...</p>}

        {songs.map((song, idx) => (
          <div key={idx} className={`box${idx + 1}`}>
            <h1>{song.snippet.title}</h1>
            <p>{song.snippet.channelTitle}</p>
            {song.snippet.thumbnails.high && (
              <img src={song.snippet.thumbnails.high.url} alt={song.snippet.title} className="cover" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
