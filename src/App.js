import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Booking from './components/Booking';
import Attendance from './components/Attendance';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
};

export default App;
