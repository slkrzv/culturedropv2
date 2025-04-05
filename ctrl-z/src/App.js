import React from 'react';
import './style.css';

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="navstyle">
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
      
      
      <section className='hero'>
          <div className='box1'>
            <h1>
                
            </h1>
          </div>
          <div className='box2'>
            
          </div>
          <div className='box3'>
            
          </div>
          <div className='box4'>
            
          </div>
      </section>
    </section>
    
  );
};

export default HeroSection;
