import React, { useEffect } from 'react'
import Ecommerce from './Ecommerce';
import { Link } from 'react-router-dom';

export default function () {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
  return (
    <div className="container-fluid p-6">
  <div
    className="container-fluid bg-primary py-5 bg-hero1 mb-4 mb-lg-5" // Add mb-4 for mobile margin
    style={{ height: '400px', overflow: 'hidden', marginTop: '30px' }}
  >
    <div className="container py-5">
      <div className="row justify-content-center justify-content-lg-start">
        <div className="col-lg-8 text-center text-lg-start">
        <h1 className="display-1 text-white" style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 2.9)', marginBottom: '1.5rem' }}>Ecommerce Products</h1>
          <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
            Home
          </Link>
          <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  </div>
<Ecommerce/>

  </div>
  )
}
