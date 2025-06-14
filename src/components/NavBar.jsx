import React from "react";
import logo from '../assets/image.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="logo"></img> Neko</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Chat</li>
      </ul>
    </nav>
  );
};

export default NavBar;
