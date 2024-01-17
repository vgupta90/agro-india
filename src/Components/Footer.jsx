import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer bg-primary text-white mt-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-white mb-4">Corporate Office</h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-white me-2"></i>
                    <p className="text-white mb-0">
                      20 Madan Colony, Sadar Bazar, Narmdapuram (MP), 461001
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-white me-2"></i>
                    <p className="text-white mb-0">support@siddhvidhya.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-white me-2"></i>
                    <p className="text-white mb-0">+919827378478</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://twitter.com/SiddhvidhyaLtd"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://www.facebook.com/profile.php?id=61551712237903"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://pin.it/4E2LGsI"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://www.instagram.com/siddhvidhyaagro"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://www.linkedin.com/in/siddhvidhya-agro-india-pvt-ltd-547702294"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a
                      className="btn btn-secondary btn-square rounded-circle me-2"
                      href="https://www.youtube.com/@SiddhvidhyaAgroIndiaPvtLtd"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>

                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Registered Office</h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-white me-2"></i>
                    <p className="text-white mb-0">
                      801/8F, Unitech Horizon, Sector Pi I & II, Greater Noida, 
                      201310
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-white me-2"></i>
                    <p className="text-white mb-0">support@siddhvidhya.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-white me-2"></i>
                    <p className="text-white mb-0">+919958188688</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-white mb-4">Site Office</h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-white me-2"></i>
                    <p className="text-white mb-0">
                      Gram : Biora Post : Powarkheda District: Narmdapuram
                      (MP), 461110
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-white me-2"></i>
                    <p className="text-white mb-0">support@siddhvidhya.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-white me-2"></i>
                    <p className="text-white mb-0">+919827378478 </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 mt-lg-n5">
  <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
    <h4 className="text-white mb-4">Quick Links</h4>
    <div className="d-flex flex-column justify-content-start">
      <Link to="/" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>Home
      </Link>
      <Link to="/about" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>About Us
      </Link>
      <Link to="/product" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>Our Products
      </Link>
      <Link to="/export" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>Export
      </Link>
      <Link to="/ecommerce" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>Ecommerce
      </Link>
      <Link to="/contact" className="text-white mb-2">
        <i className="bi bi-arrow-right text-white me-2"></i>Contact Us
      </Link>
    
    </div>
  </div>
</div>



          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">
            &copy;{" "}
            <a className="text-secondary fw-bold" href="">
              Siddhvidhya Agro India Pvt Ltd
            </a>
            . All Rights Reserved. Developed by{" "}
            <a className="text-secondary fw-bold" href="">
              Vishal Gupta
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
