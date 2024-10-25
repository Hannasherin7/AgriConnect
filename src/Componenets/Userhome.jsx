import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Importing a donut-like profile icon

const Userhome = () => {
    const navigate = useNavigate(); // Hook to navigate to a different route
    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isEatWellOpen, setIsEatWellOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleAboutDropdown = () => {
        setIsAboutOpen(!isAboutOpen);
    };

    const toggleEatWellDropdown = () => {
        setIsEatWellOpen(!isEatWellOpen);
    };

    const handleProfileClick = () => {
        navigate('/own/:id'); // Navigate to UserDetails page
    };

    return (
        <div style={styles.body}>
            <div style={styles.navbar}>
                <div style={styles.navItem}>
                    <button style={styles.navButton} onClick={toggleAboutDropdown}>
                        About Us
                    </button>
                    {isAboutOpen && (
                        <div style={styles.dropdownMenu}>
                            <Link to="/abt" style={styles.dropdownItem}>Our Farm</Link>
                            <Link to="/why" style={styles.dropdownItem}>Why Organic is Sustainable</Link>
                        </div>
                    )}
                </div>
                <div style={styles.navItem}>
                    <button style={styles.navButton} onClick={toggleEatWellDropdown}>
                        Eat and Be Well
                    </button>
                    {isEatWellOpen && (
                        <div style={styles.dropdownMenu}>
                            <Link to="/viewrec" style={styles.dropdownItem}>Recipes</Link>
                            <Link to="/viewtips" style={styles.dropdownItem}>Storage Tips</Link>
                        </div>
                    )}
                </div>
                <div style={styles.navItem}>
                    <button style={styles.navButton} onClick={toggleDropdown}>
                        What would you like to do?
                    </button>
                    {isOpen && (
                        <div style={styles.dropdownMenu}>
                            <Link className="dropdown-item" to="/addpro" style={styles.dropdownItem}>
                                Sell Your Products
                            </Link>
                            <Link className="dropdown-item" to="/buy" style={styles.dropdownItem}>
                                Browse Available Products
                            </Link>
                        </div>
                    )}
                </div>
                {/* New nav item for the Complaint Submission */}
                <div style={styles.navItem}>
                    <Link to="/complaintadd" style={styles.navButton}>Submit Complaint</Link>
                </div>
                {/* Profile Icon aligned to the right */}
                <div style={styles.profileContainer}>
                    <FaUserCircle 
                        style={styles.profileIcon} 
                        onClick={handleProfileClick} // Handle profile icon click
                    />
                </div>
            </div>

            <div style={styles.titleContainer}>
                <h1 style={styles.title}>AgriConnect</h1>
                <h2 style={styles.subtitle}>The Organic Agricultural Marketplace</h2>
            </div>

            <div style={styles.glassBackground}>
                <div style={styles.content}>
                    <h3 style={styles.welcomeMessage}>Welcome to the Marketplace!</h3>
                    <p style={styles.subMessage}>Your one-stop shop for all things organic.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        backgroundImage: `url("https://www.shutterstock.com/image-photo/farmer-his-son-front-sunset-260nw-2189637087.jpg")`,
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
        justifyContent: 'space-between', // Space between items to push profile icon to the right
    },
    navItem: {
        position: 'relative',
        marginRight: '20px',
    },
    navButton: {
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        textDecoration: 'none',
    },
    dropdownMenu: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: '5px',
        padding: '10px',
        zIndex: 2,
    },
    dropdownItem: {
        color: 'white',
        textDecoration: 'none',
        display: 'block',
        margin: '5px 0',
        whiteSpace: 'nowrap',
        minWidth: '200px',
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
    profileContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto', // Align the profile icon to the right
    },
    profileIcon: {
        color: 'white',
        fontSize: '30px',
        cursor: 'pointer',
    },
};

export default Userhome;
