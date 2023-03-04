import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="listNavbar container">
        <li>Dashboard</li>
        <li>Manage</li>
        <li>Insights</li>
        <li>About</li>
        <li>My account</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
