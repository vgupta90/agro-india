import React from 'react';
import { Link } from 'react-router-dom';

const 


ServiceSection = () => {
  // Define an array of service items
  const services = [
    {
      icon: 'fa-carrot',
      title: 'Grains and cereals',
      description: 'They are a significant source of carbohydrates, fiber, and essential nutrients in many diets around the world',
      backgroundImage: '/img/pulses_cereals-transformed.jpg',
    },
    {
      icon: 'fa-apple-alt',
      title: 'Spices and herbs',
      description: 'They are often used to enhance the taste of food and can be both dried and fresh plant-based seasonings',
      backgroundImage: '/img/spices-transformed.jpg',
    },
    {
      icon: 'fa-dog',
      title: 'Fruits and vegetables',
      description: 'They are natural foods that come from plants and are typically consumed for their nutritional value and taste',
      backgroundImage: './img/fruitsandvege-transformed.jpg',
    },
    {
      icon: 'fa-tractor',
      title: 'Oil seeds',
      description: 'These seeds contain a high percentage of oil content, and their oils are used for various culinary.',
      backgroundImage: './img/oilSeeds-transformed.jpg',
    },
    {
      icon: 'fa-seedling',
      title: 'Dry fruits',
      description: 'These fruits typically have a longer shelf life compared to fresh fruits and are enjoyed for their concentrated flavors.',
      backgroundImage: './img/Dryfruits-transformed.jpg',
    },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              {/* <h6 className="text-primary text-uppercase">Services</h6> */}
              <h5 className=" text-primary">Quality Management:</h5>
            </div>
            <p className="mb-4">Our fruits and vegetables like Fresh Export and all Agriculture Products are checked by the quality inspector in compliance with India’s strict export standards before supply. With our vast experience of regional and seasonal climatic variations, we are well qualified to select top quality fruits and vegetables and Agriculture Products from each area in accordance with the international and Domestic requirements. The agricultural and market specialists working with us insist upon the optimal picking time and packing requirements of our clients countries.</p>
            <Link to="/contact" className="btn btn-primary py-md-3 px-md-5">Contact Us</Link>
          </div>
         
          {/* Map over the services array and create service items dynamically */}
          {services.map((service, index) => (
  <div key={index} className="col-lg-4 col-md-6">
    <div className="bg-light text-center p-5" >
      <div className="square-image">
        <img
          src={service.backgroundImage}
          alt={service.title}
          className="img-fluid rounded mx-auto d-block"
          style={{ height: '10rem', width: '13rem' }}
        />
      </div>
      <h4>{service.title}</h4>
      <p className="mb-0">{service.description}</p>
    </div>
  </div>
))}


        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
