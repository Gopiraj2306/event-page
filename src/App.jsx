import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';

// It's good practice to import images if they are in your src folder and bundled.
// If they are in the `public` folder, your current /img1.jpg paths are fine.
// import img1 from './assets/img1.jpg'; // Example if images are in src/assets

function App() {
  return (
    <div className="overall-content">
      <div className="left-section">
        <div className="left-section-content">
          <h2 className="heading">22–23 NOVEMBER, 2025 | ICC, SYDNEY</h2>
          <p className="cont1">
            Get ready for the <strong>Southern Hemisphere’s largest crypto event</strong>, uniting <strong>Industry leaders, Investors, Innovators, and Crypto Enthusiasts</strong> under one roof.
          </p>
          <button className="btn"><span>➜</span> BECOME A SPONSOR</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="australia-mask">
          {/* This div will contain the images. The mask is applied to its parent. */}
          <div className="image-collage-wrapper">
            {/*
              Assign unique classes to each image for specific styling.
              The src paths assume images are in your `public` folder.
            */}
            <img src="/img1.jpg" alt="Collage Image 1" className="collage-image img-pos-1" />
            <img src="/img398.jpg" alt="Collage Image 2" className="collage-image img-pos-2" />
            <img src="/img3.jpg" alt="Collage Image 3" className="collage-image img-pos-3" />
            <img src="/img4.jpg" alt="Collage Image 4" className="collage-image img-pos-4" />
            <img src="/img10.jpg" alt="Collage Image 5" className="collage-image img-pos-5" />
            <img src="/img18.jpg" alt="Collage Image 6" className="collage-image img-pos-6" />
            <img src="/img24.jpg" alt="Collage Image 7" className="collage-image img-pos-7" /> {/* This one is for Tasmania in the example */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

























/*import './App.css';

function App() {
  return (
    <div className="overall-content">
      <div className="left-section">
        <div className="left-section-content">
          <h2 className="heading">22–23 NOVEMBER, 2025 | ICC, SYDNEY</h2>
          <p className="cont1">
            Get ready for the <strong>Southern Hemisphere’s largest crypto event</strong>, uniting <strong>Industry leaders, Investors, Innovators, and Crypto Enthusiasts</strong> under one roof.
          </p>
          <button className="btn"><span>➜</span> BECOME A SPONSOR</button>
        </div>
      </div>

      
      <div className="right-section">
        <div className="australia-mask">
          <div className="image-grid">
            <img src="/img1.jpg" alt="Grid 1" />
            <img src="/img2.jpg" alt="Grid 2" />
            <img src="/img3.jpg" alt="Grid 3" />
            <img src="/img4.jpg" alt="Grid 4" />
            <img src="/img5.jpg" alt="Grid 5" />
            <img src="/img6.jpg" alt="Grid 6" />
            <img src="/img7.jpg" alt="Grid 7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
*/
