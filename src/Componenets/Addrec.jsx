import axios from 'axios';
import React, { useState } from 'react';

export const Addrec = () => {
    const [data, setData] = useState({
        "imager": "",
        "incredientsr": "",
        "titler": "",
        "descriptionr": "",
        "typer": ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readVlue = () => {
        console.log(data);
        axios.post("https://agriconnect-backend-lekh.onrender.com/addrec", data).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully added");
                } else {
                    alert("Error");
                }
            }
        ).catch(
            (error) => {
                console.log(error.message);
                alert(error.message);
            }
        );
    };

    // Inline styles
    const containerStyle = {
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/023/431/337/non_2x/abstract-bacgkround-green-with-leaf-line-art-and-copy-space-illustration-vector.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh', // Full height of the viewport
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.7)', // Glass effect with more opacity
        backdropFilter: 'blur(10px)', // Blur effect
        borderRadius: '10px', // Rounded corners
        padding: '20px', // Padding inside the container
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Shadow for depth
        width: '100%', // Full width
        maxWidth: '600px', // Maximum width
    };

    return (
        <div style={containerStyle}>
            <div style={glassStyle}>
                <h1 style={{ textAlign: 'center' }}>ADD RECIPE</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                {/** Input fields */}
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Image</label>
                                    <input type="text" className="form-control" name='imager' value={data.imager} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Ingredients</label>
                                    <input type="text" className="form-control" name='incredientsr' value={data.incredientsr} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input type="text" className="form-control" name='titler' value={data.titler} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <input type="text" className="form-control" name='descriptionr' value={data.descriptionr} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Type</label>
                                    <input type="text" className="form-control" name='typer' value={data.typer} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <br /><br />
                                    <button onClick={readVlue} className="btn btn-success">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
