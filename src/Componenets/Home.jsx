import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const styles = {
    body: {
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: '#f9f9f9',
      color: '#333',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    heading1: {
      fontFamily: "'Lora', serif",
      color: '#4caf50',
      fontSize: '2.5rem',
      marginBottom: '10px',
      textAlign: 'center',
    },
    heading3: {
      fontFamily: "'Lora', serif",
      color: '#4caf50',
      fontSize: '1.8rem',
      marginBottom: '20px',
      textAlign: 'center',
    },
    image: {
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
      height: '150px',
      width: '150px',
      display: 'block',
      margin: '20px auto',
    },
    scrollingText: {
      color: '#fff',
      backgroundColor: '#4caf50',
      padding: '10px',
      fontSize: '1.1rem',
      animation: 'scroll 15s linear infinite',
    },
    carouselImage: {
      borderRadius: '8px',
      objectFit: 'cover',
      height: '300px',
      transition: 'transform 0.5s ease',
    },
    accordionButton: {
      backgroundColor: '#f1f1f1',
      color: '#333',
      fontWeight: 600,
      border: 'none',
      borderBottom: '1px solid #ddd',
      transition: 'background-color 0.3s ease',
    },
    accordionBody: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      padding: '20px',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#555',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Align buttons to the left
      gap: '10px',
    },
    button: {
      padding: '10px 15px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    tutorialLink: {
      position: 'absolute', // Positioning the link absolutely
      top: '20px', // Aligning it with the top
      right: '20px', // Aligning it with the right
      fontSize: '1.2rem',
      color: '#4caf50',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Tutorial Link at the top right */}
        <Link to="/video" style={styles.tutorialLink}>
          Click here to watch the tutorial on this page
        </Link>

        {/* Button Container Aligned to the Left */}
        <div style={styles.buttonContainer}>
          <Link to="/login">
            <button style={styles.button}>Sign In</button>
          </Link>
          <Link to="/signup">
            <button style={styles.button}>Sign Up</button>
          </Link>
        </div>
        
        <h1 style={styles.heading1}>AgriConnect</h1>
        <h3 style={styles.heading3}>The Organic Agricultural Marketplace</h3>
        <div className="text-center">
          <img
            src="https://media.istockphoto.com/id/1254633533/vector/agriculture-logo-icon-sign-or-symbol-leaf-farm-nature-ecology.jpg?s=612x612&w=0&k=20&c=zBBvYEnW3LmqX5C-QcvYtNr9z9WuE5p8y5K63ERspfE="
            alt="AgriConnect Logo"
            style={styles.image}
          />
        </div>
        <p style={styles.scrollingText}>
          <marquee>
            AgriConnect.AgriConnect.AgriConnect.AgriConnectAgriConnect.AgriConnect.AgriConnect.AgriConnect...
            AgriConnect.AgriConnect.AgriConnect.AgriConnect...AgriConnect.AgriConnect.AgriConnect.AgriConnect...
            AgriConnect.AgriConnect.AgriConnect.AgriConnect...AgriConnect.AgriConnect.AgriConnect.AgriConnect...
            AgriConnect.AgriConnect.AgriConnect.AgriConnect...
          </marquee>
        </p>

        {/* Carousel */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://s.tmimgcdn.com/scr/400x250/255700/farming-and-agriculture-presentation-powerpoint-template_255782-3-original.png"
                className="d-block w-100"
                alt="Agriculture Slide 1"
                style={styles.carouselImage}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://ars.els-cdn.com/content/image/1-s2.0-S0308521X21002018-ga1.jpg"
                className="d-block w-100"
                alt="Agriculture Slide 2"
                style={styles.carouselImage}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZw0rJ0wtxUjUtm4hV21DC3DSv8RdRN8rcQ&s"
                className="d-block w-100"
                alt="Agriculture Slide 3"
                style={styles.carouselImage}
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Accordion */}
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={styles.accordionButton}>
                Direct Connection Between Farmers and Consumers:
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={styles.accordionBody}>
                The platform emphasizes a direct link between local farmers and consumers, allowing for the delivery of fresh, nutritious products. This ensures fair prices and greater transparency about product origins.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={styles.accordionButton}>
                Sustainability and Local Economy Support:
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={styles.accordionBody}>
                The platform supports sustainable practices by reducing transportation-related environmental impacts and focusing on local agriculture. It helps reduce the carbon footprint and strengthens local economies.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={styles.accordionButton}>
                Recipe-Sharing Feature:
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={styles.accordionBody}>
                The platform includes a recipe-sharing feature that allows users to discover and share recipes using the organic ingredients available on the platform. This promotes the use of fresh ingredients and fosters community interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
