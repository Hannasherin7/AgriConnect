import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Userlogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate(); // Moved here for clarity

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => { // Make this function async
        if (!data.email || !data.password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        // Hardcoded admin credentials check
        if (data.email === "admin@gmail.com" && data.password === "admin") {
            sessionStorage.setItem("token", "admin-token");
            sessionStorage.setItem("userid", "admin-id");
            alert("Admin logged in successfully");
            navigate('/adminhome'); // Redirect to admin home page
            return; // Skip the API request for admin login
        }

        // For regular users, proceed with the API call
        try {
            const response = await axios.post("http://localhost:7000/login", data);
            if (response.data.status === "Success") {
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("userid", response.data.userid);
                localStorage.setItem('useremail', data.email); // Change to local storage for user email
                alert("LOGGED IN");
                navigate('/userhome'); // Redirect to user home page for regular users
            } else if (response.data.status === "Error") {
                setErrorMessage(response.data.message); // Directly use the message from the response
            } else {
                setErrorMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.log(error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div style={{
            backgroundImage: `url("https://www.shutterstock.com/image-photo/farmer-his-son-front-sunset-260nw-2189637087.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <Link to="/" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                color: 'black',
                textDecoration: 'none',
                fontWeight: 'bold',
            }}>Home</Link>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black', // Inline color black
            }}>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '400px',
                    width: '100%'
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Login</h2>
                    {errorMessage && <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>{errorMessage}</div>}
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label"><b>Email</b></label>
                            <input
                                type="text"
                                className="form-control"
                                name='email'
                                value={data.email}
                                onChange={inputHandler}
                                placeholder="Enter your email"
                                style={{ color: 'black' }} // Inline color black for input text
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label"><b>Password</b></label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                value={data.password}
                                onChange={inputHandler}
                                placeholder="Enter your password"
                                style={{ color: 'black' }} // Inline color black for input text
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn btn-success" onClick={readValue}>Login</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center" style={{ marginTop: '15px' }}>
                            <p>Don't have an account? <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userlogin;
