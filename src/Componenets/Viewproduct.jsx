import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Viewproduct = () => {
    const [data, changeData] = useState([]);

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

    const pageStyle = {
        backgroundImage: "url('https://wallpapers.com/images/hd/aesthetic-astronaut-flower-field-laptop-4ndqwiauwee5jpze.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        padding: '20px',
        color: 'white' // Adjust text color for visibility
    };

    return (
        <div style={pageStyle}>
            <h1><center>VIEW ALL DETAILS</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map((value, index) => (
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
