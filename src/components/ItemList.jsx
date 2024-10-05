import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';  // Import only fetchItems

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const fetchedItems = await fetchItems();
            setItems(fetchedItems);
        };

        getItems();
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;