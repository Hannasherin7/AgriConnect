import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

export const Rec = () => {
    const [data, changeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const fetchData = () => {
        axios.get("https://agriconnect-backend-lekh.onrender.com/viewrec")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message); // Show the error message
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

    // Filter the recipes based on the search term
    const filteredData = data.filter(item =>
        item.titler.toLowerCase().includes(searchTerm.toLowerCase())
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

    // Inline styles for the main container
    const containerStyle = {
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/023/431/337/non_2x/abstract-bacgkround-green-with-leaf-line-art-and-copy-space-illustration-vector.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh', // Full height of the viewport
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px', // Padding for the container
    };

    // Inline styles for the glass effect
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
                <h1 style={headingStyle}>Explore Delicious Recipes</h1> {/* Styled heading */}

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {/* Recipe Search Feature */}
                        <input
                            type="text"
                            placeholder="Search Recipe"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="form-control"
                            style={{ width: '400px' }} // Extended width of the search bar
                        />

                        {/* Dropdown for navigation */}
                        <select onChange={handleNavigation} className="form-select" style={{ width: '200px' }}>
                            <option value="">Navigate</option>
                            <option value="/deleterec">Delete  Recipe</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col col-12">
                            <div className="row g-3">
                                {filteredData.map((value, index) => {
                                    return (
                                        <div key={index} className="col col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="card">
                                                <img src={value.imager} alt={value.titler} />
                                                <div className="card-body">
                                                    <p className="card-text">Title: {value.titler}</p>
                                                    <p className="card-text">Ingredient: {value.incredientsr}</p>
                                                    <p className="card-text">Description: {value.descriptionr}</p>
                                                    <p className="card-text">Type: {value.typer}</p>
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
