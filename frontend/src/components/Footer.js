import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            position: 'fixed', 
            bottom: 0, 
            width: '100%', 
            background: '#f8f9fa', 
            textAlign: 'center', 
            padding: '10px 0',
            borderTop: '1px solid #e7e7e7',
            fontSize: '13px',
            color: '#7f8c8d'
        }}>
            <span>© 2026 com.sidhant.jumbotwo. All Rights Reserved Enterprise Architecture.</span>
        </footer>
    );
}