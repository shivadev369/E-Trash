import React from 'react';
import './SchedulePickup.css'; // Import the CSS file for styling

const SchedulePickup = () => {
  return (
    <div className="schedule-pickup">
      <div className="image-container">
        <img src="your-image-url.jpg" alt="Leave for it" className="left-image" />
      </div>
      <div className="form-container">
        <form className="pickup-form">
          <h2>Schedule Pickup</h2>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Location:
            <input type="text" name="location" required />
          </label>
          <label>
            Contact Number:
            <input type="tel" name="contact" required />
          </label>
          <label>
            Type of E-Waste:
            <select name="e-waste-type" required>
              <option value="" disabled>Select Type</option>
              <option value="electronic">Electronic</option>
              <option value="appliance">Appliance</option>
              <option value="battery">Battery</option>
              <option value="lamp">Lamp</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SchedulePickup;
