// src/ProductNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topicdetail"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Topic Detail Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;