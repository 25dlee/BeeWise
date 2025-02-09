// src/ProductNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
// import homeIcon from '@iconify/icons-mdi/home';
// import missionsIcon from '@iconify/icons-mdi/clipboard'
// import beehiveIcon from '@iconify/icons-mdi/beehive-outline';


import "./Navbar.css";

function Navbar() {
  return (
    <header>
      {/* Single nav container for all your pages */}
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon icon="material-symbols:home-outline-rounded" 
              style={{ color: "#FF8C00", fill: "#FF8C00" }} 
              width={40} 
              height={40} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon icon ="uil:clipboard"
              style={{ color: "#FF8C00", fill: "#FF8C00" }} 
              width={40} 
              height={40}/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/social"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon icon="mdi:beehive-outline" 
              style={{ color: "#FF8C00", fill: "#FF8C00" }} 
              width={40} 
              height={40}/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon icon="iconamoon:profile"
              style={{ color: "#FF8C00", fill: "#FF8C00" }} 
              width={40} 
              height={40}/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;