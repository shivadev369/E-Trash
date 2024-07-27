import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import 'styles.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
