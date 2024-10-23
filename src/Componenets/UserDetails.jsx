import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get("http://localhost:7000/userdetails"); // Adjust this endpoint as needed
            setUser(response.data);
            console.log("user details",response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
            setError("Could not fetch user details. Please try again later.");
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    if (error) {
        return <div style={styles.error}>{error}</div>;
    }

    if (!user) {
        return <div style={styles.loading}>Loading...</div>;
    }

    return (
        <div>
            <h1>user details</h1>
        </div>
    //    <div style={styles.pageStyle}>
    //        <h1 style={styles.title}>User Details</h1>
    //    <div style={styles.detailsContainer}>
    //             <p><strong>Name:</strong> {user.name}</p>
    //             <p><strong>Email:</strong> {user.email}</p>
    //             <p><strong>Phone No:</strong> {user.phone}</p>
    //             <p><strong>Gender:</strong> {user.gender}</p>
    //             <p><strong>User ID:</strong> {user._id}</p>
    //         </div>
      //  </div>
    );
};

const styles = {
    pageStyle: {
        backgroundImage: "url('https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        margin: '20px 0',
    },
    detailsContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '10px',
        padding: '20px',
        backdropFilter: 'blur(10px)',
        width: '80%',
        textAlign: 'left',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
    loading: {
        textAlign: 'center',
    },
};

export default UserDetails;
