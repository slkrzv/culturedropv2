// src/App.js
import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        // Facem fetch către proxy-ul Node
        const response = await fetch('http://localhost:3001/api/search');
        
        if (!response.ok) {
          throw new Error(`Eroare la fetch. Cod: ${response.status}`);
        }

        const data = await response.json();
        // iTunes returnează { resultCount, results: [...] }
        setResults(data.results);
      } catch (err) {
        setError(err.message);
        console.error('Eroare la preluarea melodiilor:', err);
      }
    };

    fetchSearch();
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
        {results.length === 0 && !error && (
          <p className="loading-message">Se încarcă rezultatele...</p>
        )}

        {results.map((item, idx) => (
          <div key={idx} className={`box${idx + 1}`}>
            {/* Fiecare item poate conține trackName, artistName, previewUrl etc. */}
            <h1>{item.trackName}</h1>
            <p>{item.artistName}</p>

            {item.artworkUrl100 && (
              <img src={item.artworkUrl100} alt={item.trackName} className="cover" />
            )}

            {/* Poți afișa și un buton audio pentru preview */}
            {/* {item.previewUrl && (
              <audio controls src={item.previewUrl} />
            )} */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
