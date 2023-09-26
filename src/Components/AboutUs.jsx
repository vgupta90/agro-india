import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function AboutUs() {
  const [imageHeight, setImageHeight] = useState('450px'); // Initial height for larger screens
  const [marginBottom, setMarginBottom] = useState('30px'); // Initial margin for larger screens

  useEffect(() => {
    // Function to update the image height and margin based on screen width
    const updateStyles = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        // Adjust styles for screens with a max width of 768px (small screens)
        setImageHeight('auto'); // Set to 'auto' to maintain aspect ratio
        setMarginBottom('0px'); // Adjust the margin as needed for small screens
      } else {
        // Reset styles for larger screens
        setImageHeight('450px'); // Adjust as needed
        setMarginBottom('0px'); // Adjust as needed for larger screens
      }
    };

    // Add an event listener to update the styles when the window is resized
    window.addEventListener('resize', updateStyles);

    // Initial call to set the styles based on the current screen size
    updateStyles();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateStyles);
    };
  }, []);
  // Access the location using React Router's useLocation hook
  const location = useLocation();

  // Determine if it's the home page based on the pathname
  const isHomePage = location.pathname === '/';

  // Define the content and image based on the page
  const content = isHomePage
    ? {
        title: 'Welcome to Our Organic Farms',
        description:
          'Siddhvidhya Organic Farms is a pioneering organization committed to sustainable and organic agriculture. With a mission to promote chemical-free farming practices, we produce nutrient-rich organic food that benefits both consumers and the environment. Our vision is a world where organic farming is the norm, creating healthier ecosystems and communities. We are dedicated to leading the way in responsible land stewardship and providing access to wholesome, organic food for a better, more sustainable future. At Siddhvidhya Organic Farms, we cultivate a healthier planet, one organic harvest at a time'
          +'Our products, rich in nutrients and essential vitamins, encourage healthier lifestyles for families. We envision a world where organic agriculture is the norm, benefiting people and the planet alike. we strive to cultivate a future where sustainable practices are the cornerstone of agriculture, healthier world for generations to come'
          ,
        iconClass: '',
        imageSrc: './img/Organicfarm-transformed.jpeg', // Change to the image for the home page
        heading: '',
        about: 'About Siddhvidhya'
      }
    : {
        title: 'We Produce Organic Food For Your Family',
        description:
          'Our commitment to organic farming is unwavering. We believe that by nurturing the earth and following sustainable agricultural practices, we can deliver food that not only tastes exceptional but is also good for your health and the environment.  We believe in the power of organic food to nourish your body and soul. Our products are rich in nutrients and essential vitamins, promoting overall well-being and a healthier lifestyle for your family.',
        iconClass: 'fa fa-seedling display-1 text-secondary',
        imageSrc: './img/AboutFarm-transformed.jpeg', // Change to the image for the about page
        heading: '100% Organic',
        about: 'About Us'
      };

  return (
    <div className="container-fluid about">
      <div className="container">
        <div className="row gx-3 gx-lg-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex h-90 pt-4">
              <img
                className="img-fluid mt-auto mx-auto"
                src={content.imageSrc}
                alt="Organic Farm"
                style={{
                  height: imageHeight ,// Apply the dynamic image height
                  maxWidth: '100%', // Ensure the image doesn't exceed the container width
                  textAlign: isHomePage ? 'center' : 'left', // Center-align for mobile, left-align for others
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 pb-5" style={{ marginBottom: marginBottom }}>
            <div className="mb-3 pb-2">
              <h5 className="text-primary text-uppercase">{content.about}</h5>
              <h1 className="display-5">{content.title}</h1>
            </div>
            <p className="mb-4">{content.description}</p>
            <div className="row gx-3 gx-sm-4 gy-4">
              <div className="col-sm-6">
                <i className={content.iconClass}></i>
                <h4>{content.heading}</h4>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
