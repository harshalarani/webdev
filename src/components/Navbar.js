import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import Image from "./bms.png";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Image} alt="Logo" style={{ width: '50px', height: 'auto' }} className="rotating-image" />
      </div>
      <div className="heading">EVENTSHUB</div> 
     
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
       
        <li><Link to="./about">AboutUs</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
