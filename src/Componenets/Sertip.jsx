import React, { useState } from 'react';
import axios from 'axios';

export const Sertip = () => {
    const [data, setData] = useState({
        "item": ""
    });

    const [result, setResult] = useState([]);

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:7000/searchtip", data)
            .then((response) => {
                setResult(response.data);
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
                <h1 style={headingStyle}>Search Tips</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6">
                                    <label htmlFor="" className="form-label">Item</label>
                                    <input type="text" className="form-control" name='item' value={data.item} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6">
                                    <br /><br />
                                    <button onClick={readValue} className="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row g-3">
                                {result.map((value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={index}>
                                            <div className="card">
                                                <img src={value.imaget} alt="tip" className="card-img-top" />
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
}
