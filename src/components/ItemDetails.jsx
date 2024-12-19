import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/items/${id}/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch item.');
        }

        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Medicine Details</h2>
      <p>Name: {item.name}</p>
      <p>Batch Number: {item.batch_number}</p>
      <p>Quality Status: {item.quality_status}</p>
    </div>
  );
};

export default ItemDetails;