import React, { useState } from 'react';

const UpdateMedicine = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [medicineToUpdate, setMedicineToUpdate] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    accepted_or_rejected: '',
  });
  const [message, setMessage] = useState(''); // Success/Error message
  const [searchResults, setSearchResults] = useState([]);

  // Handle Search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle update input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value });
  };

  // Handle Medicine Search
  const handleSearchMedicine = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setMessage('No access token found. Please log in.');
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/items/?search=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Medicine not found.');
      }

      const data = await response.json();
      setSearchResults(data); // Display search results
      setMessage(''); // Clear previous messages
    } catch (error) {
      setMessage('Error fetching medicine. Please check the name or try again.');
      console.error('Error fetching medicine:', error);
    }
  };

  // Handle Medicine Update
  const handleUpdateMedicine = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setMessage('No access token found. Please log in.');
      return;
    }

    if (!medicineToUpdate) {
      setMessage('No medicine selected for updating.');
      return;
    }

    // Combine original medicine details with updated status
    const updatedMedicine = {
      ...medicineToUpdate, // Keep original fields
      accepted_or_rejected: updatedDetails.accepted_or_rejected, // Update the status
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/items/${medicineToUpdate.id}/`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedMedicine),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to update medicine.');
      }

      setMessage('Medicine updated successfully!');
      setMedicineToUpdate(null); // Reset selected medicine
      setSearchResults([]); // Clear search results
      setUpdatedDetails({ accepted_or_rejected: '' }); // Reset form
    } catch (error) {
      setMessage(`Error updating medicine: ${error.message}`);
      console.error('Error updating medicine:', error);
    }
  };

  // Handle Medicine Select for Update
  const handleSelectMedicine = (medicine) => {
    setMedicineToUpdate(medicine);
    setUpdatedDetails({
      accepted_or_rejected: medicine.accepted_or_rejected,
    });
    setMessage(''); // Clear previous messages
  };

  return (
    <div className="update-medicine-container">
      <h2>Update Medicine</h2>

      {/* Search Form */}
      <form onSubmit={handleSearchMedicine} className="search-form">
        <div>
          <label>Search Medicine by Name:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter medicine name"
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>

      {message && <p className="message">{message}</p>} {/* Display messages */}

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div className="medicine-list">
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((medicine) => (
              <li
                key={medicine.id}
                onClick={() => handleSelectMedicine(medicine)}
                className="medicine-item"
              >
                <p>
                  <strong>{medicine.name}</strong> - Batch:{' '}
                  {medicine.batch_number} - Status:{' '}
                  <span
                    className={`medicine-status ${
                      medicine.accepted_or_rejected.toLowerCase() === 'accepted'
                        ? 'status-accepted'
                        : 'status-rejected'
                    }`}
                  >
                    {medicine.accepted_or_rejected}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Update Form */}
      {medicineToUpdate && (
        <form onSubmit={handleUpdateMedicine} className="update-form">
          <h3>Update Medicine: {medicineToUpdate.name}</h3>
          <div>
            <label>Status (Accepted/Rejected):</label>
            <input
              type="text"
              name="accepted_or_rejected"
              value={updatedDetails.accepted_or_rejected}
              onChange={handleInputChange}
              placeholder="Enter Accepted/Rejected"
              required
            />
          </div>
          <button type="submit">Update Medicine</button>
        </form>
      )}
    </div>
  );
};

export default UpdateMedicine;
