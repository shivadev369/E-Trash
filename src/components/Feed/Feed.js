import React from 'react';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-header">
        <div className="timer">5 : 158 : 4 : 15</div>
        <div className="action-text">time left to take action</div>
      </div>
      <h1 className="main-heading">we create circular economy solutions for thought leaders</h1>
      <div className="feed-content">
        <div className="feed-item">
          <img src="path_to_e_waste_image" alt="E-waste" className="feed-image" />
          <h2>e-waste</h2>
          <p>
            through pioneering practices and technological innovation,
            our programmes help shape contours of the e-waste industry
          </p>
        </div>
        <div className="feed-item">
          <img src="path_to_plastic_waste_image" alt="Plastic waste" className="feed-image" />
          <h2>plastic waste</h2>
          <p>
            together with world's leading FMCG brands, karo sambhav launched India's
            first industry-led venture to solve the plastic waste crisis
          </p>
        </div>
        <div className="feed-item">
          <img src="path_to_battery_waste_image" alt="Battery waste" className="feed-image" />
          <h2>battery waste</h2>
          <p>
            we are helping industry leaders decode circularity and create collection and
            recycling ecosystems for battery waste
          </p>
        </div>
        <div className="feed-item">
          <img src="path_to_glass_waste_image" alt="Glass waste" className="feed-image" />
          <h2>glass waste</h2>
          <p>
            we partnered with saint gobain to create India's first voluntary EPR
            frameworks for glass
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
