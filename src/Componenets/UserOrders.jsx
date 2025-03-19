import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserOrders = async () => {
            const userEmail = localStorage.getItem('useremail'); // Retrieve user email from localStorage
            console.log("Retrieved user email from localStorage:", userEmail); // Log the retrieved email

            // Check if userEmail is null
            if (!userEmail) {
                setError("User email not found. Please log in again.");
                return;
            }

            try {
                const response = await axios.get('https://agriconnect-backend-lekh.onrender.com/vieworders'); // Fetch all orders
                console.log("API Response:", response.data);

                // Filter orders for the logged-in user
                const filteredOrders = response.data.filter(order => 
                    order.userEmail.toLowerCase() === userEmail.toLowerCase()
                );

                if (filteredOrders.length > 0) {
                    setUserOrders(filteredOrders);
                } else {
                    setError("No orders found for this user.");
                }
            } catch (err) {
                console.error("Error fetching user orders:", err);
                setError("Could not fetch user orders. Please try again later.");
            }
        };

        fetchUserOrders(); // Call the function to fetch user orders
    }, []);

    return (
        <div style={styles.pageStyle}>
            <h1 style={styles.title}>Your Orders</h1>
            {error && <p style={styles.error}>{error}</p>} {/* Display error message if any */}
            {userOrders.length > 0 ? ( // If userOrders is not empty
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders.map((order) => (
                            <React.Fragment key={order.orderId}>
                                <tr>
                                    <td>{order.productName}</td>
                                    <td>{order.productId}</td>
                                    <td>{order.address}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.userPhone}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                </tr>
                                <tr>
                                    <td colSpan="7" style={styles.message}>
                                        Your order will be arrived within a week.
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Loading orders...</p> // Show loading state until orders are fetched
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
    message: {
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#555',
        padding: '10px 0',
    }
};

export default UserOrders;
