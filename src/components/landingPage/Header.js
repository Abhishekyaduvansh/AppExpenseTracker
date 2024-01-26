// Header.js
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <h1>Responsive Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
