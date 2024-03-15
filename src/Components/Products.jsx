import React from "react";
import ProductCart from "./ProductCart";

const ProductCarousel = () => {

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
       </>

  );
};

export default ProductCarousel;
