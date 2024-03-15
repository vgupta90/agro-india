import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand ms-lg-5">
            <img src="img/NewLogo.jpg" alt="Logo" height="70" style={{ borderRadius: '80%' }} />
          </a>

          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link
                to="/"
                className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/product"
                className={`nav-item nav-link ${location.pathname === '/product' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Product
              </Link>
              <Link
                to="/export"
                className={`nav-item nav-link ${location.pathname === '/export' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Export
              </Link>
              <Link
                to="/ecommerce"
                className={`nav-item nav-link ${location.pathname === '/ecommerce' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Ecommerce
              </Link>


              <Link
                to="/contact"
                className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
            <div className="col-lg-3">
              <div className="d-flex align-items-center justify-content-end">
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://twitter.com/SiddhvidhyaLtd"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://www.facebook.com/profile.php?id=61551712237903"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://pin.it/4E2LGsI"><i className="fab fa-pinterest"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://www.instagram.com/siddhvidhyaagro"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://www.linkedin.com/company/100549242/admin/feed/posts/"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://www.youtube.com/@SiddhvidhyaAgroIndiaPvtLtd"><i className="fab fa-youtube"></i></a>
           
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
