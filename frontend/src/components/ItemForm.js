import React, { useState } from 'react';

export default function ItemForm({ onAdd }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct JSON Payload matching our Java Entity properties
        const payload = {
            name: name,
            description: desc,
            price: parseFloat(price)
        };

        // POST mapping request hitting our publishing web service directly
			fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/items`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
		.then(() => {
		            onAdd(); // Trigger state update refresh loop in main App view
		            setName('');
		            setDesc('');
		            setPrice('');
		        })
		        .catch(err => console.error("Error posting document entry: ", err)); // Fixed Line
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', backgroundColor: '#fdfefe', border: '1px solid #e5e8e8', borderRadius: '4px' }}>
            <h3 style={{ color: '#2c3e50', marginTop: 0 }}>Register New Location Document</h3>
            <div style={{ marginBottom: '10px' }}>
                <input type="text" placeholder="Document Name" value={name} onChange={e => setName(e.target.value)} required style={{ width: '98%', padding: '8px', border: '1px solid #bdc3c7', borderRadius: '4px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input type="text" placeholder="Description / Scope" value={desc} onChange={e => setDesc(e.target.value)} required style={{ width: '98%', padding: '8px', border: '1px solid #bdc3c7', borderRadius: '4px' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <input type="number" step="0.01" placeholder="Valuation Price" value={price} onChange={e => setPrice(e.target.value)} required style={{ width: '98%', padding: '8px', border: '1px solid #bdc3c7', borderRadius: '4px' }} />
            </div>
            <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Persist and Publish Document
            </button>
        </form>
    );
}