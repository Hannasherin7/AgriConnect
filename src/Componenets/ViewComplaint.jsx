import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ViewComplaint = () => {
    const [complaints, setComplaints] = useState([]);

    // Fetch complaints when component mounts
    useEffect(() => {
        axios.get("http://localhost:7000/viewcom")
            .then((response) => {
                setComplaints(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert("Error fetching complaints");
            });
    }, []);

    const tableStyle = {
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    };

    const containerStyle = {
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/023/431/337/non_2x/abstract-bacgkround-green-with-leaf-line-art-and-copy-space-illustration-vector.jpg)',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={tableStyle}>
                <h1 style={{ textAlign: 'center' }}>Complaints List</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        
                            <th>Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.length > 0 ? (
                            complaints.map((complaint, index) => (
                                <tr key={index}>
                                   
                                    <td>{complaint.complaint}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>No complaints found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
