import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    // <div className='nevbarhight'>
    <div style={{position: 'relative'}}>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5 fixed-top" >
    <a href="index.html" className="navbar-brand d-flex d-lg-none">
        <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>


    
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
        {/* <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand ms-lg-5">
                        <h4 className="m-0 display-1 text-secondary"><span className="text-white">Farm</span>Fresh</h4>
                    </a>
                </div>
            </div> */}

            <Link to="/" className="nav-item nav-link">Home</Link>

            <Link to="/about" className="nav-item nav-link">About</Link>
            {/* <a href="service.html" className="nav-item nav-link">Service</a> */}
            <Link to="/product" className="nav-item nav-link">Product</Link>
            {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                    <a href="detail.html" className="dropdown-item">Blog Detail</a>
                    <a href="feature.html" className="dropdown-item">Features</a>
                    <a href="team.html" className="dropdown-item">The Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                </div>
            </div> */}
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>

        <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-end">
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
    </div>
</nav>
<Outlet />
</div>
  )
}
