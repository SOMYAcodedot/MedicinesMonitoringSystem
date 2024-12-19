import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api'; // Import login function from api.js

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials
  const validUsername = 'archin@0106';
  const validPassword = 'prajwal@p1111';

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username and password match
    if (username === validUsername && password === validPassword) {
      try {
        // Get JWT token (dummy login function used for now)
        const accessToken = await login(username, password);

        // Set logged-in state
        setLoggedIn(true);

        // Store tokens in localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', 'dummyRefreshToken');

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        setError('Invalid username or password');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Update state and redirect to login
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="login-container">
      <h2>{localStorage.getItem('accessToken') ? 'Dashboard' : 'Login'}</h2>

      {/* Display Login Form */}
      {!localStorage.getItem('accessToken') ? (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      ) : (
        // Display Logout Button if logged in
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;