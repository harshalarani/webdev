import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Image from "./bms.png";

const Navbar = ({ isLoggedIn }) => {
  // const [NavToggle, setNavToggle] = useState("");
  // const [route, setRoute] = useState("");
  const check = window.localStorage.getItem("usn");
  console.log("check", check, "props", isLoggedIn);

  let route, NavToggle;

  // useEffect(() => {
  // while (1) {
  // if (check == null) {
  //   route = "/login";
  //   // NavToggle = "Login";
  //   // setNavToggle("Login");
  //   // setRoute("/login");
  // } else {
  //   route = "/profile";
  //   // NavToggle = "Profile";
  //   // setNavToggle("Profile");
  //   // setRoute("/profile");
  //   // }
  // }
  // }, [check, NavToggle, route]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={Image}
          alt="Logo"
          style={{ width: "50px", height: "auto" }}
          className="rotating-image"
        />
      </div>
      <div className="heading">EVENTSHUB</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>

        <li>
          <Link to="./about">AboutUs</Link>
        </li>
        <li>
          {/* {check == null ? (
            <Link to="/login">{NavToggle}</Link>
          ) : (
            <Link to="/profile">{NavToggle}</Link>
          )} */}
          <Link to="/login">
            {isLoggedIn ? "Profile" : "Login"}
            {/* {window.location.pathname === "/logi" ? "Profile" : "Login"} */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
