import React, { useState, useEffect } from 'react';
import './App.css';

function ImageStackBox({ images, title }) {
  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    setAnimateOnce(true);
  }, []);

  return (
    <div className="image-stack-box-wrapper">
      <div className={`image-stack-box-3d ${animateOnce ? 'animate-once' : ''}`}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title}-img-${index}`}
            style={{ '--i': index }}
            className="image-stack-box-image"
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [animateMap, setAnimateMap] = useState(false);

  useEffect(() => {
    setAnimateMap(true);
  }, []);

  const handleRefresh = () => {
    setAnimateMap(false);
    setTimeout(() => setAnimateMap(true), 100);
  };

  return (
    <div className="overall-content">
      <div className="left-section">
        <div className="left-section-content">
          <h2 className="heading">22–23 NOVEMBER, 2025 | ICC, SYDNEY</h2>
          <p className="cont1">
            Get ready for the <strong>Southern Hemisphere’s largest crypto event</strong>, uniting <strong>Industry leaders, Investors, Innovators, and Crypto Enthusiasts</strong> under one roof.
          </p>
          <button className="btn" onClick={handleRefresh}>
            REFRESH
          </button>
        </div>
      </div>
      <div className="right-section">
        <div className="rotation-scene-map">
          <div className={`australia-mask ${animateMap ? 'animate-map' : ''}`}>
            <div className="image-collage-wrapper">
              <img src="/img1.jpg" alt="Crypto event speaker in Sydney" className="collage-image img-pos-1" />
              <img src="/img398.jpg" alt="Blockchain technology showcase" className="collage-image img-pos-2" />
              <img src="/img3.jpg" alt="Crypto investors networking" className="collage-image img-pos-3" />
              <img src="/img4.jpg" alt="Sydney ICC event venue" className="collage-image img-pos-4" />
              <img src="/img10.jpg" alt="Crypto innovation panel" className="collage-image img-pos-5" />
              <img src="/img18.jpg" alt="Event attendees discussion" className="collage-image img-pos-6" />
              <img src="/img24-1.jpg" alt="Crypto market trends display" className="collage-image img-pos-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;








/*
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [animateMap, setAnimateMap] = useState(false);

  useEffect(() => {
    setAnimateMap(true);
  }, []);

  return (
    <div className="overall-content">
      <div className="left-section">
        <div className="left-section-content">
          <h2 className="heading">22–23 NOVEMBER, 2025 | ICC, SYDNEY</h2>
          <p className="cont1">
            Get ready for the <strong>Southern Hemisphere’s largest crypto event</strong>, uniting <strong>Industry leaders, Investors, Innovators, and Crypto Enthusiasts</strong> under one roof.
          </p>
          <button className="btn" aria-label="Become a Sponsor for the Crypto Event">
            BECOME A SPONSOR
          </button>
        </div>
      </div>
      <div className="right-section">
        <div className="rotation-scene-map">
          <div className={`australia-mask ${animateMap ? 'animate-map' : ''}`}>
            <div className="image-collage-wrapper">
              <img src="/img1.jpg" alt="Crypto event speaker in Sydney" className="collage-image img-pos-1" />
              <img src="/img398.jpg" alt="Blockchain technology showcase" className="collage-image img-pos-2" />
              <img src="/img3.jpg" alt="Crypto investors networking" className="collage-image img-pos-3" />
              <img src="/img4.jpg" alt="Sydney ICC event venue" className="collage-image img-pos-4" />
              <img src="/img10.jpg" alt="Crypto innovation panel" className="collage-image img-pos-5" />
              <img src="/img18.jpg" alt="Event attendees discussion" className="collage-image img-pos-6" />
              <img src="/img24-1.jpg" alt="Crypto market trends display" className="collage-image img-pos-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


*/



