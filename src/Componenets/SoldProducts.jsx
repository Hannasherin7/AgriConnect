import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SoldProducts = () => {
    const [soldProducts, setSoldProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSoldProducts = async () => {
            const userEmail = localStorage.getItem('useremail'); // Retrieve user email from localStorage
            console.log("Retrieved user email from localStorage:", userEmail); // Log the retrieved email

            // Check if userEmail is null
            if (!userEmail) {
                setError("User email not found. Please log in again.");
                return;
            }

            try {
                const response = await axios.get('http://localhost:7000/viewpro'); // Fetch all products
                console.log("API Response:", response.data);

                // Check if the response has data
                if (!response.data || response.data.length === 0) {
                    setError("No products found in the database.");
                    return;
                }

                // Filter products for the logged-in user (seller)
                const filteredProducts = response.data.filter(product => 
                    product.email && product.email.toLowerCase() === userEmail.toLowerCase()
                );

                if (filteredProducts.length > 0) {
                    setSoldProducts(filteredProducts);
                } else {
                    setError("No sold products found for this user.");
                }
            } catch (err) {
                console.error("Error fetching sold products:", err.message || err.response);
                setError("Could not fetch sold products. Please try again later.");
            }
        };

        fetchSoldProducts(); // Call the function to fetch sold products
    }, []);

    return (
        <div style={styles.pageStyle}>
            <h1 style={styles.title}>Sold Products</h1>
            {error && <p style={styles.error}>{error}</p>} {/* Display error message if any */}
            {soldProducts.length > 0 ? ( // If soldProducts is not empty
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product id</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity Sold</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {soldProducts.map((product) => (
                            <tr key={product._id}>
                                <td>{product.pname}</td>
                                <td>{product._id}</td>
                                <td>{product.pdescription}</td>
                                <td>${product.price}</td>
                                <td>{product.quantity}</td>
                                <td><img src={product.image} alt={product.pname} style={{ width: '100px' }} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Loading sold products...</p> // Show loading state until products are fetched
            )}
        </div>
    );
};

const styles = {
    pageStyle: {
        padding: '20px',
        backgroundColor: '#f5f5f5',
    },
    title: {
        textAlign: 'center',
        margin: '20px 0',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
};

export default SoldProducts;
