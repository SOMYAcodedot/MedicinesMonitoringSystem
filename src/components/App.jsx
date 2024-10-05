import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import Login from './Login';
import NavBar from './NavBar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="app-container">
      {loggedIn ? (
        <>
          <NavBar />
          <Dashboard />
          <ItemList setSelectedItem={setSelectedItem} />
          {selectedItem && <ItemDetails item={selectedItem} />}
        </>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
