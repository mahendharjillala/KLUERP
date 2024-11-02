// ItemList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/items'); // Backend URL
                setItems(response.data); // Set state with the fetched data
            } catch (err) {
                setError(err.message); // Handle error
                console.error('Error fetching data:', err);
            }
        };

        fetchData(); // Call the function to fetch data
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div>
            <h1>Items</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name} - Quantity: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
