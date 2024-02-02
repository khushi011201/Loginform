import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                Account Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
