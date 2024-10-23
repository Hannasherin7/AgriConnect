import React, { useState } from 'react';
import axios from 'axios';

export const Deleterec = () => {
    const [data, setData] = useState({
        titler: "", // Changed from "item" to "titler"
    });

    const [result, setResult] = useState([]);

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        // Ensure you're using the correct endpoint for searching recipes
        axios.post("http://localhost:7000/searchrec", data)
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    };

    const deleteValue = (id) => {
        console.log(id);
        let input = { "_id": id };
        axios.post("http://localhost:7000/deleterec", input)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Successfully deleted");
                    // Refresh the search results here to reflect the deletion
                    readValue(); 
                } else {
                    alert("Error deleting");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
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
                <h1 style={{ textAlign: 'center' }}>DELETE RECIPE</h1>
                <div className="container">
                    <div className="row">
                        <div className="col col-12">
                            <div className="row">
                                <div className="col col-12 col-sm-6">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name='titler' 
                                        value={data.titler} 
                                        onChange={inputHandler} 
                                    />
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
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                            <div className="card">
                                                <img src={value.imager} alt="recipe" />
                                                <div className="card-body">
                                                    <p className="card-text">Ingredients: {value.incredientsr}</p>
                                                    <p className="card-text">Title: {value.titler}</p>
                                                    <p className="card-text">Description: {value.descriptionr}</p>
                                                    <p className="card-text">Type: {value.typer}</p>
                                                    <p>
                                                        <button className="btn btn-danger" onClick={() => { deleteValue(value._id) }}>Delete</button>
                                                    </p>
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
