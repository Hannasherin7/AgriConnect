import React from 'react';

const WhyOrganicSustainable = () => {
  const sectionStyle = {
    backgroundImage: `url('https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2023/07/BP-AI-in-Agriculture-The-Future-of-Farming_body-im-3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '50px',
    color: '#fff',
    minHeight: '100vh',
  };

  const glassStyle = {
    background: 'rgba(255, 255, 255, 0.6)', // White with transparency
    backdropFilter: 'blur(10px)', // Apply blur effect
    borderRadius: '10px', // Rounded corners
    padding: '20px', // Inner spacing
    margin: '10px 0', // Spacing between elements
  };

  return (
    <div style={sectionStyle}>
      <div style={glassStyle}>
        <h1>Why Organic is Sustainable</h1>
        <p>
          Organic farming is not just a method of food production; it's a holistic approach to agriculture that prioritizes environmental health, social equity, and economic viability. Unlike conventional farming, which often relies on synthetic fertilizers and pesticides, organic farming utilizes natural methods to enhance soil fertility and combat pests. This sustainable practice helps preserve biodiversity, protects ecosystems, and promotes a healthier planet for future generations.
        </p>
        <p>
          One of the key principles of organic farming is the emphasis on maintaining healthy soils. Organic farmers use techniques such as crop rotation, cover cropping, and composting to improve soil structure and fertility. These practices not only enhance the nutrient content of the soil but also reduce erosion and runoff, leading to cleaner water sources. By fostering a diverse soil ecosystem, organic farming contributes to greater resilience against climate change and environmental degradation.
        </p>
        <p>
          Additionally, organic farming promotes biodiversity by providing habitats for various species, including beneficial insects and wildlife. This approach minimizes monoculture—the cultivation of a single crop over a large area—which is detrimental to the environment. By diversifying crops, organic farms can improve ecosystem health, reduce pest outbreaks, and enhance resilience to diseases. This biodiversity is crucial for sustainable food systems and plays a vital role in ensuring food security.
        </p>
        <p>
          Organic farming practices also prioritize the well-being of local communities. By supporting small farmers and local economies, organic agriculture fosters a more equitable food system. Consumers are increasingly seeking products that are not only healthy but also ethically produced. Organic farms often sell directly to consumers through farmers' markets, community-supported agriculture (CSA), and online platforms, allowing consumers to connect with the source of their food and make informed choices.
        </p>
        <p>
          In conclusion, organic farming is a sustainable alternative that addresses the pressing challenges of our time, including climate change, biodiversity loss, and food insecurity. By choosing organic, consumers support practices that are beneficial to both the planet and their communities. Embracing organic agriculture means investing in a healthier future for ourselves, our environment, and the generations to come.
        </p>
      </div>
    </div>
  );
};

export default WhyOrganicSustainable;
