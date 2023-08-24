import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselData = [
    {
      imageSrc: './img/carousel-1.jpg',
      title: 'Organic Vegetables',
      caption: 'Organic Vegetables For Healthy Life',
    },
    {
      imageSrc: './img/carousel-2.jpg',
      title: 'Organic Fruits',
      caption: 'Organic Fruits For Better Health',
    },
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
    <>
      <div className="container-fluid p-6">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-pause="false" // Prevent the slider from pausing on hover
        >
          <div className="carousel-inner">
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
              >
                <img className="w-100" src={slide.imageSrc} alt={slide.title} />
                <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                  <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                    <h3 className="text-white">{slide.title}</h3>
                    <h1 className="display-1 text-white mb-md-4">{slide.caption}</h1>
                    <Link to="/about" className="btn btn-primary py-md-3 px-md-5 me-3">
                      Explore
                    </Link>
                    <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5">
                      Contact
                    </Link>
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
    </>
  );
};

export default Carousel;
