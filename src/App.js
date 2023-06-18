import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutUs';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Winner from './pages/Winner'
import Events from './pages/Events'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Login/>} />
          <Route path="/user" element={<Profile/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/winner" element={<Winner/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
