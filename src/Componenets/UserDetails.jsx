import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import UserOrders from './UserOrders'; // Import UserOrders component
import SoldProducts from './SoldProducts'; // Import SoldProducts component
import ReceivedOrders from './ReceivedOrders'; // Import ReceivedOrders component

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate for redirection

    const userId = sessionStorage.getItem('userid');

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get('http://localhost:7000/viewsign');
            const foundUser = response.data.find(u => u._id === userId);
            if (foundUser) {
                setUser(foundUser);
                console.log(foundUser);
            } else {
                setError("User not found.");
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
            setError("Could not fetch user details. Please try again later.");
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, [userId]);

    const handleLogout = () => {
        sessionStorage.clear(); // Clear session or any stored user data
        navigate('/login'); // Redirect to login page
    };

    const handleViewOrders = () => {
        navigate('/uorder'); // Redirect to user orders page
    };

    // New function to handle sold products view
    const handleViewSoldProducts = () => {
        navigate('/soldproducts/:userId'); // Redirect to sold products page
    };

    // New function to handle received orders view
    const handleViewReceivedOrders = () => {
        navigate('/rcor'); // Redirect to received orders page
    };

    if (error) {
        return <div style={styles.error}>{error}</div>;
    }

    if (!user) {
        return <div style={styles.loading}>Loading...</div>;
    }

    return (
        <div style={styles.pageStyle}>
            <div style={styles.profileCard}>
                <div style={styles.avatarContainer}>
                    <img
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" // Updated user avatar image
                        alt="User Avatar"
                        style={styles.avatar}
                    />
                </div>
                <div style={styles.userInfo}>
                    <h2 style={styles.userName}>{user.name}</h2>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone No:</strong> {user.phone}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>User ID:</strong> {user._id}</p>
                </div>
            </div>

            {/* New View Orders Button */}
            <div style={styles.viewOrdersContainer}>
                <button onClick={handleViewOrders} style={styles.viewOrdersButton}>
                    View Your Orders
                </button>
            </div>

            {/* New View Sold Products Button */}
            <div style={styles.viewSoldProductsContainer}>
                <button onClick={handleViewSoldProducts} style={styles.viewSoldProductsButton}>
                    View Sold Products
                </button>
            </div>

            {/* New View Received Orders Button */}
            <div style={styles.viewReceivedOrdersContainer}>
                <button onClick={handleViewReceivedOrders} style={styles.viewReceivedOrdersButton}>
                    View Received Orders
                </button>
            </div>

            {/* Logout Button */}
            <div style={styles.logoutContainer}>
                <button onClick={handleLogout} style={styles.logoutButton}>
                    Logout
                </button>
            </div>
        </div>
    );
};

const styles = {
    pageStyle: {
        backgroundImage: "url('https://t4.ftcdn.net/jpg/08/43/06/75/360_F_843067510_2REgt3QCVylwfkhMDTSztnwSvxrDJvEs.jpg')", // New background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensures proper spacing between content and logout button
    },
    profileCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        padding: '20px',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    avatarContainer: {
        marginBottom: '20px',
    },
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #ddd',
    },
    userInfo: {
        textAlign: 'center',
        color: '#333',
    },
    userName: {
        fontSize: '24px',
        margin: '10px 0',
    },
    viewOrdersContainer: {
        marginTop: '20px', // Ensure spacing from the content
        width: '100%', // Make the button container full width
        display: 'flex',
        justifyContent: 'center', // Center the button
    },
    viewSoldProductsContainer: {
        marginTop: '20px', // Ensure spacing from the content
        width: '100%', // Make the button container full width
        display: 'flex',
        justifyContent: 'center', // Center the button
    },
    viewReceivedOrdersContainer: {
        marginTop: '20px', // Ensure spacing from the content
        width: '100%', // Make the button container full width
        display: 'flex',
        justifyContent: 'center', // Center the button
    },
    viewOrdersButton: {
        backgroundColor: '#4CAF50', // Green background color
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    viewSoldProductsButton: {
        backgroundColor: '#007BFF', // Blue background color for the sold products button
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginLeft: '10px', // Optional spacing between buttons
    },
    viewReceivedOrdersButton: {
        backgroundColor: '#FF9800', // Orange background color for the received orders button
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginLeft: '10px', // Optional spacing between buttons
    },
    logoutContainer: {
        marginTop: '20px', // Ensure spacing from the content
        width: '100%', // Make the button container full width
        display: 'flex',
        justifyContent: 'center', // Center the button
        paddingBottom: '20px', // Add padding at the bottom for better layout
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
    loading: {
        textAlign: 'center',
        color: '#fff',
    },
};

export default UserDetails;
