import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-bootstrap";
import Features from "./Features";
import ProductCart from "./ProductCart";

const ProductCarousel = () => {
  // Sample data for the carousel
//   const products = [
//     {
//       imgSrc: "img/product-1.png",
//       //   title: 'Organic Vegetable',
//       //   price: '$19.00',
//     },
//     {
//       imgSrc: "img/product-2.png",
//       //   title: 'Organic Vegetableess',
//       //   price: '$19.00',
//     },
//     {
//       imgSrc: "img/product-1.png",
//       // title: 'Organic Vegetable 3',
//       // price: '$19.00',
//     },
//     {
//       imgSrc: "img/product-2.png",
//       // title: 'Organic Vegetableess 4',
//       // price: '$19.00',
//     },

//     // Add more products as needed
//   ];

  return (
    <>
    <div className="container-fluid py-1">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "400px"}}>
          <h6 className="text-primary text-uppercase">Products</h6>
          <h1 className="display-5">Our Fresh & Organic Products</h1>
        </div>
      </div>
    </div>

    <ProductCart/> 
       <Features />
       </>

  );
};

export default ProductCarousel;
