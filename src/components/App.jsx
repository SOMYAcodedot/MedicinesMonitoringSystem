import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import Login from './Login';
import NavBar from './NavBar';
import Contact from './Contact'; // Import the Contact component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Router>
      <div className="app-container">
        {loggedIn ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/items" element={<ItemList setSelectedItem={setSelectedItem} />} />
              {selectedItem && <Route path="/items/:id" element={<ItemDetails item={selectedItem} />} />}
              <Route path="/about" element={<div>About Us</div>} />
              <Route path="/contact" element={<Contact />} /> {/* New Contact Us route */}
            </Routes>
          </>
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      </div>
    </Router>
  );
}

export default App;
