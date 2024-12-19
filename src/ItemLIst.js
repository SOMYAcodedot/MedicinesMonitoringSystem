import React, { useEffect, useState } from 'react';
import { getItems, createItem } from './api';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', category: '', quality_status: '' });

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      setItems(fetchedItems);
    };

    fetchItems();
  }, []);

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdItem = await createItem(newItem);
    setItems([...items, createdItem]);
    setNewItem({ name: '', category: '', quality_status: '' });
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} placeholder="Name" required />
        <input type="text" name="category" value={newItem.category} onChange={handleInputChange} placeholder="Category" required />
        <input type="text" name="quality_status" value={newItem.quality_status} onChange={handleInputChange} placeholder="Quality Status" required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemList;