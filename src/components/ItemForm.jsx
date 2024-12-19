import React, { useState } from 'react';
import { addItem } from '../api';  // Importing the addItem function for API calls
import { ToastContainer, toast } from 'react-toastify';  // Importing ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Importing CSS for react-toastify

const ItemForm = ({ onMedicineAdded }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    batch_number: '',
    quality_status: '',
  });

  const [message, setMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle form submission to add new item
  const handleAddItem = async (e) => {
    e.preventDefault();

    try {
      const addedItem = await addItem(newItem);  // Add item using API call
      onMedicineAdded(addedItem);  // Notify the parent component to update the list
      setNewItem({ name: '', batch_number: '', quality_status: '' });  // Reset form fields

      // Show success notification
      toast.success('Medicine added successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);  // Show error message in the form

      // Show error notification
      toast.error('Failed to add medicine. Please try again!');
    }
  };

  return (
    <div>
      {/* Add Medicine Form */}
      <form onSubmit={handleAddItem}>
        <div>
          <label>Medicine Name:</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
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
            required
          />
        </div>
        <div>
          <label>Quality Status:</label>
          <input
            type="text"
            name="quality_status"
            value={newItem.quality_status}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      {/* Display message if available */}
      {message && <p>{message}</p>}

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
};

export default ItemForm;