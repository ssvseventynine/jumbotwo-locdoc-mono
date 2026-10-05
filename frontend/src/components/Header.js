import React from 'react';

export default function Header() {
    return (
        <header style={{
            background: '#2c3e50', 
            padding: '20px', 
            color: 'white', 
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <h2>Jumbotwo Enterprise Location Document Monitor</h2>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bdc3c7' }}>
                Monolithic Application Management Console
            </p>
        </header>
    );
}