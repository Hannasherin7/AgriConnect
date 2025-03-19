import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Product = () => {
    const [data, changeData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = () => {
        axios.get("https://agriconnect-backend-lekh.onrender.com/viewpro")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message); // Display the error message
            });
    }

    useEffect(() => { fetchData() }, []);

    const filteredProducts = data.filter(value =>
        value.pname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageStyle = {
        backgroundImage: "url('https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
        color: 'white'
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
        backdropFilter: 'blur(10px)', // Blur effect
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background for button
        backdropFilter: 'blur(10px)',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'absolute', // Position it absolutely
        right: '20px', // Move it to the right
        top: '20px' // Adjust the vertical position if needed
    };

    return (
        <div style={pageStyle}>
            <h1><center>Product Details</center></h1>

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Search for a product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        width: '300px',
                    }}
                />
            </div>

            <Link to="/deletepro">
                <button style={buttonStyle}>
                    Go to Delete Products
                </button>
            </Link>

            <div className="container" style={{ marginTop: '60px' }}> {/* Add margin to account for the button position */}
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {filteredProducts.map((value, index) => (
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                    <div className="card" style={cardStyle}>
                                        <img src={value.image} alt={value.pname} />
                                        <div className="card-body">
                                            <p className="card-text">Product Name: {value.pname}</p>
                                            <p className="card-text">Seller Email: {value.email}</p>
                                            <p className="card-text">Product Description: {value.pdescription}</p>
                                            <p className="card-text">Price: {value.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
