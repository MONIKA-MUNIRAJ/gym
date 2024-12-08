import React, { useState } from 'react';

const Booking = () => {
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your backend API call
    console.log('Booking Details:', { className, date });
    alert('Class booked successfully!');
  };

  return (
    <div>
      <h2>Class Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Class Name:</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Class</button>
      </form>
    </div>
  );
};

export default Booking;
