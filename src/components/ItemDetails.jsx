import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div className="item-details">
      <h3>Item Details</h3>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Status:</strong> {item.status}</p>
      <p><strong>Test Results:</strong> Quality data goes here...</p>
    </div>
  );
};

export default ItemDetails;