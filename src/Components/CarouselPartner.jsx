import React, { useState, useEffect } from 'react';

const CarouselPartner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselData = [
    {
      images: [
        '/img/msme.png',
        '/img/ECGC.jpeg',
        '/img/Ice-gate.jpg',
      ],
    },
    {
      images: [
        '/img/WhatsApp Image 2023-10-23 at 5.26.00 AM.jpeg',
        '/img/WhatsApp Image 2023-10-23 at 5.34.25 AM.jpeg',
        '/img/WhatsApp Image 2023-10-23 at 5.35.13 AM.jpeg',
      ],
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
        data-bs-pause="false"
        style={{ maxHeight: '150px', overflow: 'hidden' }}
      >
        <div className="carousel-inner">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            >
              <div className="d-flex">
                {slide.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    // className="w-100"
                    src={image}
                    alt=""
                    style={{
                      objectFit: 'fill',
                      height: '150px',
                      width: '33.33%', // Ensure each image has 1/3 of the container width
                    }}
                  />
                ))}
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

export default CarouselPartner;
