import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReceivedOrders = () => {
    const [receivedOrders, setReceivedOrders] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReceivedOrders = async () => {
            const userEmail = localStorage.getItem('useremail');
            console.log("Retrieved user email from localStorage:", userEmail);

            if (!userEmail) {
                setError("User email not found. Please log in again.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:7000/viewORD?email=${userEmail}`);
                console.log("API Response:", response.data);

                if (response.data.length > 0) {
                    const ordersWithStatus = response.data.map(order => {
                        // Check if this order's status is saved as "Delivered" in localStorage
                        const storedStatus = localStorage.getItem(`order-${order.orderId}`);
                        return {
                            ...order,
                            deliveryStatus: storedStatus === 'Delivered' ? 'Delivered' : 'Not Delivered'
                        };
                    });
                    setReceivedOrders(ordersWithStatus);
                } else {
                    setError("No received orders found for this user.");
                }
            } catch (err) {
                console.error("Error fetching received orders:", err);
                setError("Could not fetch received orders. Please try again later.");
            }
        };

        fetchReceivedOrders();
    }, []);

    const markAsDelivered = (orderId) => {
        setReceivedOrders(prevOrders =>
            prevOrders.map(order =>
                order.orderId === orderId && order.deliveryStatus !== 'Delivered'
                    ? { ...order, deliveryStatus: 'Delivered' }
                    : order
            )
        );

        // Save the "Delivered" status to localStorage for persistence
        localStorage.setItem(`order-${orderId}`, 'Delivered');
    };

    return (
        <div style={styles.pageStyle}>
            <h1 style={styles.title}>Received Orders</h1>
            {error && <p style={styles.error}>{error}</p>}
            {receivedOrders.length > 0 ? (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>User Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Delivery Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receivedOrders.map((order) => (
                            <tr key={order.orderId}>
                                <td>{order.productName}</td>
                                <td>{order.address}</td>
                                <td>{order.userEmail}</td>
                                <td>{order.userPhone}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                                <td>
                                    <button 
                                        onClick={() => markAsDelivered(order.orderId)} 
                                        disabled={order.deliveryStatus === 'Delivered'}
                                    >
                                        {order.deliveryStatus}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>Loading received orders...</p>
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

export default ReceivedOrders;
