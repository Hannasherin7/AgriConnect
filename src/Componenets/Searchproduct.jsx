import React, { useState } from 'react';
import axios from 'axios';

export const Searchproduct = () => {
    const [data, setData] = useState({ "pname": "" });
    const [result, setResult] = useState([]);

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const readVlue = () => {
        console.log(data);
        axios.post("http://localhost:7000/searchpro", data)
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message); // Display the error message
            });
    }

    const pageStyle = {
        backgroundImage: "url('https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
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

    const buttonStyle = {
        marginTop: '20px',
        borderRadius: '5px'
    };

    return (
        <div style={pageStyle}>
            <h1><center>SEARCH PRODUCT</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Product Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name='pname' 
                                    value={data.pname}
                                    onChange={inputHandler} 
                                    style={inputStyle} 
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br /><br />  
                                <button onClick={readVlue} className="btn btn-primary" style={buttonStyle}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {result.map((value, index) => (
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                    <div className="card">
                                        <img src={value.image} alt={value.pname} />
                                        <div className="card-body">
                                            <p className="card-text">Product Name: {value.pname}</p>
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
    )
}