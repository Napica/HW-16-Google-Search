import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar-color">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/saved" className="nav-link">
            Saved
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
