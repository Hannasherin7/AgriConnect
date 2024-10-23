import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Usersignup = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        cpassword: ""
    });

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        if (data.password !== data.cpassword) {
            alert("Passwords do not match");
            return;
        }

        axios.post("http://localhost:7000/signup", data)
            .then((response) => {
                if (response.data.status === "SIGNUP") {
                    alert("Registration successful");
                } else {
                    alert("Registration failed");
                }
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    };

    return (
        <div style={{
            backgroundImage: `url("https://c1.wallpaperflare.com/preview/798/913/93/hay-bales-fields-farming.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
        }}>
            <div className="container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(10px)',
                width: '100%',
                maxWidth: '500px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            }}>
                <h1 style={{ textAlign: 'center', color: '#000' }}>Signup</h1>
                <div className="row g-3">
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>NAME</b></label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={data.name}
                            onChange={inputhandler}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>EMAIL</b></label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={data.email}
                            onChange={inputhandler}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>PHONE</b></label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            value={data.phone}
                            onChange={inputhandler}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>GENDER</b></label>
                        <select
                            className="form-select"
                            name="gender"
                            value={data.gender}
                            onChange={inputhandler}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>PASSWORD</b></label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={data.password}
                            onChange={inputhandler}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="" className="form-label"><b>CONFIRM PASSWORD</b></label>
                        <input
                            type="password"
                            name="cpassword"
                            value={data.cpassword}
                            onChange={inputhandler}
                            className="form-control"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(5px)',
                            }}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <center>
                            <p><b>Already have an account?</b></p>
                            <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Login</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usersignup;
