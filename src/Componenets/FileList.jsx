import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('https://agriconnect-backend-lekh.onrender.com/files');
        setFiles(response.data);
      } catch (err) {
        setError('Error fetching files: ' + (err.response ? err.response.data : err.message));
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>All Uploaded Files</h1>
      {error && <p>{error}</p>}
      <ul>
        {files.length > 0 ? (
          files.map((file, index) => (
            <li key={index}>
              {/* Link to open the file */}
              <a href={`https://agriconnect-backend-lekh.onrender.com/files/${file}`} target="_blank" rel="noopener noreferrer">
                {file}
              </a>
            </li>
          ))
        ) : (
          <li>No files uploaded yet.</li>
        )}
      </ul>
    </div>
  );
};

export default FileList;
