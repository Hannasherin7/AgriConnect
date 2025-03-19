import axios from 'axios';
import React, { useState } from 'react';

export const AddComplaint = () => {
    const [complaintData, setComplaintData] = useState({
        complaint: "",
    });

    // Handler to update the complaint field
    const inputHandler = (event) => {
        setComplaintData({
            ...complaintData,
            [event.target.name]: event.target.value
        });
    };

    // Function to submit complaint
    const submitComplaint = () => {
        // Validate if the complaint field is empty
        if (!complaintData.complaint.trim()) {
            alert("Complaint cannot be empty");
            return;
        }

        console.log(complaintData);
        axios.post("https://agriconnect-backend-lekh.onrender.com/addcom", complaintData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("Complaint successfully registered");
                    // Clear the input after successful submission
                    setComplaintData({ complaint: "" });
                } else {
                    alert("Error in complaint registration: " + response.data.message);
                }
            })
            .catch((error) => {
                console.error("Error occurred:", error);
                alert("An error occurred while submitting the complaint. Please try again.");
            });
    };

    const containerStyle = {
        backgroundImage: 'url(https://www.shutterstock.com/image-photo/consumer-feedback-concept-customer-satisfaction-600nw-2103127895.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const glassStyle = {
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '500px',
    };

    const formTitleStyle = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    };

    const labelStyle = {
        fontSize: '16px',
        fontWeight: '600',
        color: '#555',
        marginBottom: '8px',
        display: 'block',
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '14px',
        width: '100%',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={glassStyle}>
                <h1 style={formTitleStyle}>Complaint Registration Form</h1>
                <div className="container">
                    {/* Complaint Input */}
                    <label htmlFor="complaint" style={labelStyle}>Complaint</label>
                    <input
                        type="text"
                        className="form-control"
                        name="complaint"
                        value={complaintData.complaint}
                        onChange={inputHandler}
                        style={inputStyle}
                        placeholder="Enter your complaint"
                    />
                    <br />

                    {/* Submit Button */}
                    <button onClick={submitComplaint} style={buttonStyle}>Submit Complaint</button>
                </div>
            </div>
        </div>
    );
};
