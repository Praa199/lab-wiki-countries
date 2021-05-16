import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
        <Link to="/details">Details</Link>
        <Link to="/list">List</Link>
      </nav>{' '}
      {/* <Link to="/" >Home</Link>
  <Link to="/about" >About</Link> */}
    </div>
  );
}

export default Navbar;
