import React from 'react'
import ProductCarousel from './Products'
import { Link } from 'react-router-dom'

export default function Product 


() {
  return (
    <div className="container-fluid p-6">
 <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-white mb-md-4">Our Products</h1>
                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                    <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5">Contact us</Link>
                </div>
            </div>
        </div>
    </div>

  <ProductCarousel/>

    </div>
  )
}
