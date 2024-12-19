import React, { useState } from 'react';

const AddItem = ({ onMedicineAdded }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    batch_number: '',
    accepted_or_rejected: ''
  });

  const [message, setMessage] = useState(''); // Success or error message

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle form submission
  const handleAddItem = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken'); // Get token from localStorage

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

      if (!response.ok) {
        throw new Error('Failed to add medicine.');
      }

      const addedItem = await response.json();
      onMedicineAdded(addedItem); // Notify parent component
      setNewItem({ name: '', batch_number: '', accepted_or_rejected: '' }); // Reset form
      setMessage('Medicine added successfully!');
    } catch (error) {
      console.error('Error adding medicine:', error);
      setMessage('Error adding medicine.');
    }
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleAddItem}>
        <div>
          <label>Medicine Name:</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Enter medicine name"
            required
          />
        </div>
        <div>
          <label>Batch Number:</label>
          <input
            type="text"
            name="batch_number"
            value={newItem.batch_number}
            onChange={handleInputChange}
            placeholder="Enter batch number"
            required
          />
        </div>
        <div>
          <label>Accepted or Rejected:</label>
          <input
            type="text"
            name="accepted_or_rejected"
            value={newItem.accepted_or_rejected}
            onChange={handleInputChange}
            placeholder="Enter status (Accepted/Rejected)"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddItem;