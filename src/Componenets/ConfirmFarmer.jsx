import React, { useEffect, useState } from "react";
import axios from "axios";

const ConfirmFarmer = () => {
    const [farmers, setFarmers] = useState([]);

    // Fetch farmers data
    const fetchFarmers = () => {
        axios.get("https://agriconnect-backend-lekh.onrender.com/farmers")
            .then(response => {
                console.log("API Response:", response.data);
                setFarmers(Array.isArray(response.data.data) ? response.data.data : []);
            })
            .catch(error => {
                console.error("Error fetching farmers:", error);
                setFarmers([]);
            });
    };

    useEffect(() => {
        fetchFarmers();
    }, []);

    // Update status function
    const updateStatus = (id, status) => {
        axios.post("https://agriconnect-backend-lekh.onrender.com/update-farmer-status", { farmerId: id, status })
            .then(() => {
                // Re-fetch data to ensure the state is updated
                fetchFarmers();
            })
            .catch(error => console.error("Error updating status:", error));
    };

    return (
        <div>
            <h2>Confirm Farmer</h2>
            {farmers.length > 0 ? (
                farmers.map(f => (
                    <div key={f._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                        <p><strong>Name:</strong> {f.name}</p>
                        <p><strong>Email:</strong> {f.email}</p>
                        <p><strong>Phone:</strong> {f.phone}</p>
                        <p><strong>ID Proof:</strong> 
    <a href={`https://agriconnect-backend-lekh.onrender.com/uploads/${f.idProof}`} target="_blank" rel="noopener noreferrer">View</a>
</p>

                        <p><strong>Terms Accepted:</strong> {f.termsAccepted ? "Yes" : "No"}</p>
                        <p><strong>Registered On:</strong> {new Date(f.createdAt).toLocaleDateString()}</p>
                        <p><strong>Status:</strong> 
                            <select 
                                value={f.status || "pending"} 
                                onChange={(e) => updateStatus(f._id, e.target.value)}
                            >
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </p>
                    </div>
                ))
            ) : (
                <p>No farmers available.</p>
            )}
        </div>
    );
};

export default ConfirmFarmer;
