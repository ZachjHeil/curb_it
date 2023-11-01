import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Importing the CSS for the gradient background

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Curb It!</h1>
      <Link to="/ListItemScreen" className="list-item-button">List an Item</Link>
    </div>
  );
}

export default Homepage;
