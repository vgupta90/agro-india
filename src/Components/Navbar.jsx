import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <div style={{ position: 'relative' }}>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 fixed-top">
        <div className="container">
          {/* Logo for desktop (top-left corner) */}
          <a href="/" className="navbar-brand ms-lg-5">
            <img src="img/agriLogo5.jpg" alt="Logo" height="75" style={{ borderRadius: '80%' }} />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
              <Link to="/product" className={`nav-item nav-link ${location.pathname === '/product' ? 'active' : ''}`}>Product</Link>
              <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            </div>

            <div className="col-lg-3">
              <div className="d-flex align-items-center justify-content-end">
                <a className="btn btn-secondary btn-square rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-secondary btn-square rounded-circle me-2" href=""><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
