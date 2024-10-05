import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Add 'Navigate'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ItemList from './components/ItemList';  // Importing ItemList
import ItemDetails from './components/ItemDetails';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import QualityCheck from './components/QualityCheck'; // New component
import Reports from './components/Reports'; // New component
import Notifications from './components/Notifications'; // New component
import ApprovalDashboard from './components/ApprovalDashboard'; // New component
import Settings from './components/Settings'; // New component
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);  // State for login

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />  {/* Redirect to login if not logged in */}
          <Route path="/items" element={loggedIn ? <ItemList /> : <Navigate to="/login" />} />  {/* Redirect to login if not logged in */}
          <Route path="/item/:id" element={loggedIn ? <ItemDetails /> : <Navigate to="/login" />} />  {/* Redirect to login if not logged in */}
          <Route path="/quality-check" element={loggedIn ? <QualityCheck /> : <Navigate to="/login" />} />
          <Route path="/reports" element={loggedIn ? <Reports /> : <Navigate to="/login" />} />
          <Route path="/notifications" element={loggedIn ? <Notifications /> : <Navigate to="/login" />} />
          <Route path="/approval-dashboard" element={loggedIn ? <ApprovalDashboard /> : <Navigate to="/login" />} />
          <Route path="/settings" element={loggedIn ? <Settings /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;