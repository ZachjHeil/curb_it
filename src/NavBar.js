import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './LoginPage';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/Homepage" className="nav-link">Home</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
      <Link to="/settings" className="nav-link">Settings</Link>
      <Link to= "/LoginPage" className='nav-link'>Login Page</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default NavBar;
