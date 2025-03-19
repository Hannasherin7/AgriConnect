import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

export const Tip = () => {
    const [data, changeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const fetchData = () => {
        axios.get("https://agriconnect-backend-lekh.onrender.com/viewtips")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message); // Show error message
            });
    };

    useEffect(() => { fetchData() }, []);

    // Function to handle dropdown selection
    const handleNavigation = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue); // Navigate to the selected route
        }
    };

    // Function to handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Update search term state
    };

    // Filter the tips based on the search term
    const filteredData = data.filter(item =>
        item.item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Inline styles for the heading
    const headingStyle = {
        fontSize: '2.5rem', // Increase font size
        color: '#2c3e50', // Dark color for text
        fontWeight: 'bold', // Bold text
        margin: '20px 0', // Margin for spacing
        textTransform: 'uppercase', // Uppercase text
        textAlign: 'center', // Center the text
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow effect
    };

    // Inline styles for glass effect container
    const containerStyle = {
        backgroundImage: 'url(https://i.pinimg.com/736x/1b/bf/23/1bbf23556515eabf7529ae6c3b54570c.jpg)', // Background image
        backgroundSize: 'cover', // Cover the entire container
        minHeight: '100vh', // Full height of the viewport
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.7)', // Glass effect with opacity
        backdropFilter: 'blur(10px)', // Blur effect
        borderRadius: '10px', // Rounded corners
        padding: '20px', // Padding inside the container
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Shadow for depth
        width: '100%', // Full width
        maxWidth: '1000px', // Maximum width for the card container
    };

    return (
        <div style={containerStyle}>
            <div style={glassStyle}>
                <h1 style={headingStyle}>Explore Storage Tips</h1> {/* Styled heading */}
                
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {/* Search input */}
                        <input
                            type="text"
                            placeholder="Search Tip"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="form-control"
                            style={{ width: '400px' }} // Extended width of the search bar
                        />

                        {/* Dropdown for navigation */}
                        <select onChange={handleNavigation} className="form-select" style={{ width: '200px' }}>
                            <option value="">Navigate</option>
                            <option value="/deletetip">Delete Tip</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col col-12">
                            <div className="row g-3">
                                {filteredData.map((value, index) => {
                                    return (
                                        <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="card">
                                                <img src={value.imaget} alt="Tip" />
                                                <div className="card-body">
                                                    <p className="card-text">Item: {value.item}</p>
                                                    <p className="card-text">Tip: {value.tip}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
