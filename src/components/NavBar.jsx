import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Update logged-in state and redirect to login
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/items">Items</Link></li>
        <li><Link to="/delete-medicine">Delete Medicine</Link></li>
        <li><Link to="/update-medicine">Update Medicine</Link></li> {/* New route for Update Medicine */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li> {/* Contact Us link */}
        
        {/* Logout Button */}
        <li>
          <button onClick={handleLogout} style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'blue' }}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;