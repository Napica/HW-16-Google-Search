import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar"

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 styling"></h1>
          <p className="lead"></p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
