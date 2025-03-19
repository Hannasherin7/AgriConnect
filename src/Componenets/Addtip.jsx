import axios from 'axios';
import React, { useState } from 'react';

export const Addtip = () => {
    const [data, setData] = useState({
        "imaget": "",
        "item": "",
        "tip": ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("https://agriconnect-backend-lekh.onrender.com/addtip", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully added");
                } else {
                    alert("Error");
                }
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    };

    // Inline styles
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
        maxWidth: '600px', // Maximum width for the card container
    };

    // Inline styles for the heading
    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={glassStyle}>
                <h1 style={headingStyle}>Add Tip</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6">
                                    <label htmlFor="" className="form-label">Image</label>
                                    <input type="text" className="form-control" name='imaget' value={data.imaget} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <label htmlFor="" className="form-label">Item</label>
                                    <input type="text" className="form-control" name='item' value={data.item} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <label htmlFor="" className="form-label">Tip</label>
                                    <input type="text" className="form-control" name='tip' value={data.tip} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <br /><br />
                                    <button onClick={readValue} className="btn btn-success">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
