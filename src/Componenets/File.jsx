import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const File = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState(''); // State for email input
  const [uploadStatus, setUploadStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for controlling the pop-up
  const [isUploaded, setIsUploaded] = useState(false); // State to track if file has been uploaded
  const navigate = useNavigate(); // Initialize navigate

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('email', email); // Append email to FormData

    try {
      const response = await axios.post('https://agriconnect-backend-lekh.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully!');
      setShowPopup(true); // Show the pop-up on successful upload
      setIsUploaded(true); // Set the uploaded state to true
      console.log('Response:', response.data);
    } catch (error) {
      setUploadStatus(`Upload error: ${error.response?.data?.message || error.message}`);
      console.error('Upload error:', error.response || error.message);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Hide the pop-up
    navigate('/addpro'); // Navigate to the AddProduct page
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required /> {/* Email input */}
        <input type="file" onChange={handleFileChange} required disabled={isUploaded} />
        <button type="submit" disabled={isUploaded}>Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
      
      {/* Popup for successful upload */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          zIndex: 1000,
        }}>
          <p>File uploaded successfully!</p>
          <button onClick={handlePopupClose}>OK</button>
        </div>
      )}
    </div>
  );
};

export default File;
