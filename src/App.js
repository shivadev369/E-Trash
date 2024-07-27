import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import SchedulePickup from './components/SchedulePickup/SchedulePickup';
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <SchedulePickup /> 
      <Contacts />
    </div>
  );
};

export default App;
