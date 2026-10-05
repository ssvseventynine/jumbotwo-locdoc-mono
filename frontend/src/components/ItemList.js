import React from 'react';

export default function ItemList({ items }) {
    return (
        <div style={{ margin: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '4px' }}>
            <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>
                Location Document Registry View
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
                <thead>
                    <tr style={{ backgroundColor: '#eaeded', color: '#2c3e50' }}>
                        <th style={{ padding: '12px', border: '1px solid #d5dbdb' }}>ID</th>
                        <th style={{ padding: '12px', border: '1px solid #d5dbdb' }}>Document Name</th>
                        <th style={{ padding: '12px', border: '1px solid #d5dbdb' }}>Description Mapping</th>
                        <th style={{ padding: '12px', border: '1px solid #d5dbdb' }}>Valuation Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ padding: '12px', textAlign: 'center', color: '#7f8c8d' }}>
                                No documents found in database.
                            </td>
                        </tr>
                    ) : (
                        items.map(item => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #e5e8e8' }}>
                                <td style={{ padding: '12px', border: '1px solid #e5e8e8' }}>{item.id}</td>
                                <td style={{ padding: '12px', border: '1px solid #e5e8e8', fontWeight: 'bold' }}>{item.name}</td>
                                <td style={{ padding: '12px', border: '1px solid #e5e8e8' }}>{item.description}</td>
                                <td style={{ padding: '12px', border: '1px solid #e5e8e8', color: '#27ae60' }}>${item.price.toFixed(2)}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}