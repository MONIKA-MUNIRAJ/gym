import React, { useState } from 'react';

const Attendance = () => {
  const [classId, setClassId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your backend API call
    console.log('Attendance Details:', { classId, status });
    alert('Attendance marked successfully!');
  };

  return (
    <div>
      <h2>Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Class ID:</label>
          <input
            type="text"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <button type="submit">Mark Attendance</button>
      </form>
    </div>
  );
};

export default Attendance;
