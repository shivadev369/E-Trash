import React from 'react';
import './styles.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <header className="hero">
      <h1>Welcome to Our Website</h1>
      <p>Your journey begins here</p>
    </header>
  );
};

export default App;
