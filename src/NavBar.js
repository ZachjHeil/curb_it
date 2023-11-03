import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './LoginPage';
import './MarketplaceAdd';
import './MarketPlaceDisplay'
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/Homepage" className="nav-link">Home</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
      <Link to="/MarketPlaceDisplay" className="nav-link">MarketPlaceDisplay</Link>
      <Link to= "/LoginPage" className='nav-link'>Login Page</Link>
      <Link to ="/MarketplaceAdd" className='nav-link'> List Item</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default NavBar;
