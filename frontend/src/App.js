import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import Footer from './components/Footer';

function App() {
    // State hook to hold the shared inventory/document data array
    const [items, setItems] = useState([]);

    // Centralized function to fetch published data from the Spring Boot API
    const fetchItems = () => {
		fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/items/consume`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setItems(data))
            .catch(err => console.error("Error fetching items in App component: ", err));
    };

    // React Lifecycle Hook to auto-trigger the data fetch upon browser initialization
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#f4f6f7', minHeight: '100vh', paddingBottom: '60px' }}>
            {/* Component 1: Header Presentation Tier */}
            <Header />
            
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '10px' }}>
                {/* Component 2: Data Input Form Engine */}
                <ItemForm onAdd={fetchItems} />
                
                {/* Component 3: Data Presentation Registry View */}
                <ItemList items={items} />
            </div>

            {/* Component 4: Footer Presentation Tier */}
            <Footer />
        </div>
    );
}

export default App;