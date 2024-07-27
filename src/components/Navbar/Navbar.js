import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import News from './News';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='' alt='logo' className='logo'/>
      <ul className="navbar-menu">
        <Home />
        <About />
        <Services />
        <Contact />
        <News />

      </ul>
      <div className='search-box'>
        <input type="text" placeholder="Search" />
       
      </div>
      <div className='signup'>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
