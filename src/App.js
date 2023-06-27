import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutUs';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import AcademicEvents from './pages/AcademicEvents'
import FunEvents from './pages/FunEvents'
import SportEvent from './pages/SportEvent'
import Fests from './pages/Fests'
import EventToday from './pages/EventToday'
import Events from './pages/Events'
import Appa from './pages/src/Appa';
import Mori from './pages/Mori';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Login/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/AcademicEvents" element={<AcademicEvents/>} />
          <Route path="/FunEvents" element={<FunEvents/>} />
          <Route path="/SportEvent" element={<SportEvent/>} />
          <Route path="/Fests" element={<Fests/>} />
          <Route path="/EventToday" element={<EventToday/>} />
          <Route path="/register" element={<Appa/>} />
          <Route path="/moreinfo" element={<Mori/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
