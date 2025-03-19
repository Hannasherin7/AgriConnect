import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Fconfirmation = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        idProof: null,
        termsAccepted: false,
    });
    const [message, setMessage] = useState("");
    const [showTerms, setShowTerms] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    const navigate = useNavigate();
    const userEmail = localStorage.getItem("userEmail"); // Ensure this is set during login

    // Check registration status on component mount
    useEffect(() => {
        const checkRegistration = async () => {
            try {
                const response = await axios.get(`https://agriconnect-backend-lekh.onrender.com/check-farmer/${userEmail}`);
                if (response.data.registered) {
                    setIsRegistered(true);
                    setUserDetails(response.data.details);
                }
            } catch (error) {
                console.error("Error checking registration status:", error);
            }
        };
        checkRegistration();
    }, [userEmail]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setData({ ...data, idProof: e.target.files[0] });
    };

    const handleAcceptTerms = () => {
        setAccepted(true);
        setShowTerms(false);
        setData({ ...data, termsAccepted: true });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.termsAccepted) {
            setMessage("You must accept the terms and conditions.");
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("idProof", data.idProof);
        formData.append("termsAccepted", data.termsAccepted);

        try {
            const response = await axios.post("https://agriconnect-backend-lekh.onrender.com/register-farmer", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(response.data.message);
            setIsRegistered(true);
        } catch (error) {
            setMessage("Error registering farmer.");
        }
    };

    if (isRegistered) {
        return (
            <div>
                <h2>Your Registration Details</h2>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
                <p><strong>Phone:</strong> {userDetails.phone}</p>
                <p><strong>Status:</strong> {userDetails.status}</p>

                {userDetails.status === "approved" ? (
                    <button onClick={() => navigate('/addpro')}>Go to Add Product</button>
                ) : (
                    <p>Your registration is pending approval. Please wait for admin verification.</p>
                )}
            </div>
        );
    }

    return (
        <div>
            <h2>Farmer Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="file" name="idProof" onChange={handleFileChange} required />
                
                <button type="button" onClick={() => setShowTerms(true)}>Read Terms and Conditions</button>

                {accepted && (
                    <div>
                        <input type="checkbox" checked={accepted} readOnly /> I accept the Terms and Conditions
                    </div>
                )}
                
                <button type="submit" disabled={!accepted}>Register</button>
                {message && <p>{message}</p>}
            </form>

            {showTerms && (
                <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
                    <h3>Admin's Message: Terms and Conditions</h3>
                    <p>Dear Farmer,</p>
                    <p>
                        By registering on our platform, you confirm that all products you sell are 100% organic.  
                        If you are found selling non-organic products under the organic label, you will face penalties  
                        including account suspension and legal consequences.  
                    </p>
                    <button onClick={handleAcceptTerms}>I Accept</button>
                </div>
            )}
        </div>
    );
};

export default Fconfirmation;
