import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    
    <nav className="navbar">
        <img src='' alt='logo' className='logo'/>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder="Search" />
        <img src='' alt=''/>


      </div>

      <img src='' alt='lightmode' className='toggle-icon'/>
    </nav>
  );
};

export default Navbar;
