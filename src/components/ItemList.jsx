import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]); // List of medicines
  const [newItem, setNewItem] = useState({
    name: '',
    batch_number: '',
    accepted_or_rejected: '',
  });
  const [message, setMessage] = useState(''); // Success or error message

  // Fetch existing items
  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/items/', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error('Failed to fetch items.');

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle form submission
  const handleAddItem = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');

    if (!token) {
      setMessage('No access token found. Please log in.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/items/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) throw new Error('Failed to add medicine.');

      const addedItem = await response.json();
      setItems([...items, addedItem]);
      setNewItem({ name: '', batch_number: '', accepted_or_rejected: '' });
      setMessage('Medicine added successfully!');
    } catch (error) {
      console.error('Error adding medicine:', error);
      setMessage('Error adding medicine.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Medicine List</h1>

      {/* Form to add a new medicine */}
      <form className="form" onSubmit={handleAddItem}>
        <div className="input-group">
          <label className="label">Medicine Name:</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter medicine name"
            required
          />
        </div>
        <div className="input-group">
          <label className="label">Batch Number:</label>
          <input
            type="text"
            name="batch_number"
            value={newItem.batch_number}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter batch number"
            required
          />
        </div>
        <div className="input-group">
          <label className="label">Status (Accepted/Rejected):</label>
          <input
            type="text"
            name="accepted_or_rejected"
            value={newItem.accepted_or_rejected}
            onChange={handleInputChange}
            className="input"
            placeholder="Accepted/Rejected"
            required
          />
        </div>
        <button type="submit" className="button">
          Add Medicine
        </button>
      </form>

      {message && (
        <p className={`message ${message.includes('Error') ? 'error' : ''}`}>
          {message}
        </p>
      )}

      {/* Display existing medicines */}
      <ul className="medicine-list">
  {items.map((item) => (
    <li key={item.id} className="medicine-item">
      <span className="medicine-name">
        {item.name} - Batch: {item.batch_number}
      </span>
      <span
        className={`medicine-status ${
          item.accepted_or_rejected.toLowerCase() === 'accepted'
            ? 'accepted'
            : 'rejected'
        }`}
      >
        {item.accepted_or_rejected}
      </span>
    </li>
  ))}
</ul>

    </div>
  );
};

export default ItemList;
