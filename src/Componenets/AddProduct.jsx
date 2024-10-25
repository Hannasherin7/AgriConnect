import axios from 'axios';
import React, { useState } from 'react';

export const AddProduct = () => {
    const [data, setData] = useState({
        image: "",
        email: "", // Email field for the seller
        pname: "",
        pdescription: "",
        price: "",
        quantity: "",
        category: ""
    });

    const [message, setMessage] = useState(""); // State for feedback message

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        // Validate form data before submission
        const { image, email, pname, pdescription, price, quantity, category } = data;
        if (!image || !email || !pname || !pdescription || !price || !quantity || !category) {
            setMessage("Please fill in all fields.");
            return;
        }

        console.log(data);
        axios.post("http://localhost:7000/addpro", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    setMessage("Product successfully added");
                    setData({ image: "", email: "", pname: "", pdescription: "", price: "", quantity: "", category: "" }); // Reset form
                } else {
                    setMessage("Error adding product");
                }
            })
            .catch((error) => {
                console.log(error.message);
                setMessage("An error occurred");
            });
    };

    // Updated page style for full-screen background
    const pageStyle = {
        backgroundImage: "url('https://png.pngtree.com/background/20230615/original/pngtree-hay-bale-encircled-by-trees-in-a-field-picture-image_3545761.jpg')",
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent repeating
        height: '100vh', // Full viewport height
        padding: '20px',
        color: 'white' // Adjust text color for visibility
    };

    const inputStyle = {
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '15px',
        color: 'white', // Adjust input text color
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent background
        width: '100%' // Ensure inputs are full width
    };

    const dropdownStyle = {
        marginBottom: '20px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black' // Dropdown text color
    };

    return (
        <div style={pageStyle}>
            <h1><center>ADD PRODUCT</center></h1>
            <div style={dropdownStyle}>
                <label htmlFor="navigation">Navigate:</label>
                <select 
                    id="navigation" 
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                    style={{ marginLeft: '10px' }}
                >
                    <option value="">Select</option>
                    <option value="/deletepro">Delete Product</option>
                    <option value="/searchpro">Search Product</option>
                    <option value="/viewpro">View Products</option>
                </select>
            </div>

            {/* Feedback Message */}
            {message && <div className="alert alert-info">{message}</div>}

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {Object.keys(data).map((key) => (
                                <div className="col-sm-6" key={key}>
                                    <label className="form-label">
                                        {key === 'pname' ? 'Product Name' : key === 'email' ? 'Seller Email' : key.charAt(0).toUpperCase() + key.slice(1)}
                                    </label>
                                    <input 
                                        type={key === 'price' || key === 'quantity' ? 'number' : 'text'} 
                                        className="form-control" 
                                        name={key} 
                                        value={data[key]} 
                                        onChange={inputHandler} 
                                        style={inputStyle} 
                                    />
                                </div>
                            ))}
                            <div className="col-12">
                                <br /><button onClick={readValue} className="btn btn-success">ADD PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
