import React, { useEffect, useState } from 'react';
import './style.css';

const HeroSection = () => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '0916d5277emsh1043f5d23b05e37p12570cjsne27236e743fb', // ← înlocuiește cu cheia ta de pe RapidAPI
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
          }
        });

        const data = await response.json();
        setTopTracks(data.slice(0, 4)); // Primele 4 melodii
      } catch (error) {
        console.error('Eroare la preluarea melodiilor:', error);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="navstyle w-full max-w-5xl">
        <nav className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Logo</h1>
          <ul className="flex gap-6 text-lg">
            <li><a href="/">Acasă</a></li>
            <li><a href="/">Despre</a></li>
            <li><a href="/">Servicii</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </div>

      <section className="hero grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {topTracks.map((track, index) => (
          <div key={index} className={`box${index + 1} bg-white p-4 shadow-lg rounded-xl flex flex-col items-center text-center`}>
            <h2 className="text-xl font-semibold mb-2">{track.title}</h2>
            <p className="text-gray-600 mb-2">{track.subtitle}</p>
            {track.images?.coverart && (
              <img src={track.images.coverart} alt={track.title} className="rounded-md w-32 h-32 object-cover" />
            )}
          </div>
        ))}
      </section>
    </section>
  );
};

export default HeroSection;
