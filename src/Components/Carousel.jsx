import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselData = [
    {
      imageSrc: './img/capbann.jpeg',
      title: 'Organic Vegetables',
      caption: 'Organic Vegetables For Healthy Life',
    },
    {
      imageSrc: './img/carousel-2.jpeg',
      title: 'Organic Papaya',
      caption: 'Papaya: Your Path to Healthy Living',
    },
    {
      imageSrc: './img/fruit1.jpeg',
      title: 'Organic Mushroom',
      caption: 'Organic Mushroom For Better Health',
    },
    {
      imageSrc: './img/saffFarm.jpeg',
      title: 'Saffron',
      caption: 'Saffron: Spice for a Healthy Life',
    },
    {
      imageSrc: './img/Export-transformed.jpeg',
      title: 'Quality Exports',
      caption: 'Enriching Lives Worldwide',
    },
    {
      imageSrc: './img/vege_export-transformed.jpeg',
      title: 'Vegetables',
      caption: 'Our Vegetables, Your Health',
    },
    {
      imageSrc: './img/Grains-transformed.jpeg',
      title: 'Grains Export',
      caption: 'Exporting Health Worldwide',
    }
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    // Auto-rotate the slider every 5 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0" style={{ marginTop: '30px' }}>
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-pause="false" // Prevent the slider from pausing on hover
        style={{ maxHeight: '400px', overflow: 'hidden' }} // Set a fixed height for the container
      >
        <div className="carousel-inner">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            >
              <img
                className="w-100"
                src={slide.imageSrc}
                alt={slide.title}
                style={{
                  objectFit: 'cover',
                  height: '400px', // Set a default height for tablet screens
                }}
              />
              <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                <div className="text-start p-4" style={{ maxWidth: '800px' }}>
                  <h4 className="text-white" style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>{slide.title}</h4>
                  <h4
                    className={`display-1 text-white mb-md-4 ${
                      window.innerWidth < 768 ? 'small-screen-caption' : ''
                    }`}
                    style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 2.9)' }}
                  >
                    {slide.caption}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
          onClick={handlePrevSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
          onClick={handleNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
