import React from 'react';
import { Link } from 'react-router-dom';

const Adminhome = () => {
    return (
        <div style={styles.body}>
            <div style={styles.navbar}>
                <Link to="/users" style={styles.navItem}>
                    <button style={styles.navButton}>Users</button>
                </Link>
                <Link to="/tips" style={styles.navItem}>
                    <button style={styles.navButton}>Tips</button>
                </Link>
                <Link to="/orders" style={styles.navItem}>
                    <button style={styles.navButton}>Orders</button>
                </Link>
                <Link to="/products" style={styles.navItem}>
                    <button style={styles.navButton}>Products</button>
                </Link>
                <Link to="/recipes" style={styles.navItem}>
                    <button style={styles.navButton}>Recipes</button>
                </Link>
                <Link to="/complaints" style={styles.navItem}>
                    <button style={styles.navButton}>Complaints</button>
                </Link>
                <Link to="/file" style={styles.navItem}>
                    <button style={styles.navButton}>Certificates</button>
                </Link>
            </div>

            {/* Link to Home below the navbar */}
            <div style={styles.homeLinkContainer}>
                <Link to="/" style={styles.homeLink}>Go to Home</Link>
            </div>

            <div style={styles.titleContainer}>
                <h1 style={styles.title}>Admin Dashboard</h1>
                <h2 style={styles.subtitle}>Welcome to the Admin Panel</h2>
            </div>

            <div style={styles.glassBackground}>
                <div style={styles.content}>
                    <h3 style={styles.welcomeMessage}>Welcome, Admin!</h3>
                    <p style={styles.subMessage}>Manage your marketplace effectively.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-smart-agriculture-drone-farmland-planting-photo-image_15542145.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    navbar: {
        backgroundColor: 'black',
        display: 'flex',
        padding: '10px',
    },
    navItem: {
        marginRight: '20px',
    },
    navButton: {
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    homeLinkContainer: {
        textAlign: 'center',
        margin: '10px 0',
    },
    homeLink: {
        color: 'blue',
        textDecoration: 'underline',
        fontSize: '18px',
    },
    titleContainer: {
        textAlign: 'center',
        margin: '20px 0',
        position: 'relative',
        zIndex: 1,
    },
    title: {
        color: 'black',
        fontSize: '48px',
        margin: 0,
    },
    subtitle: {
        color: 'black',
        fontSize: '24px',
        margin: '10px 0',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    welcomeMessage: {
        color: 'white',
        fontSize: '36px',
        margin: '10px 0',
    },
    subMessage: {
        color: 'white',
        fontSize: '18px',
        margin: '10px 0',
    },
    glassBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '15px',
        padding: '20px',
        backdropFilter: 'blur(10px)',
        display: 'inline-block',
        margin: '20px auto',
        maxWidth: '80%',
        zIndex: 1,
    },
};

export default Adminhome;
