import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    let valid = true;

    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required' });
      valid = false;
    }

    if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required' });
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      valid = false;
    }

    if (!formData.phone) {
      setErrors({ ...errors, phone: 'Phone number is required' });
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      setErrors({ ...errors, phone: 'Phone number must be valid' });
      valid = false;
    }

    if (!formData.message) {
      setErrors({ ...errors, message: 'Message is required' });
      valid = false;
    } else if (formData.message.split(/\s+/).length > 100) {
      setErrors({ ...errors, message: 'Message must be less than 100 words' });
      valid = false;
    }

    if (valid) {
      // Submit the form or perform any other action here
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <>
      <div className="container-fluid p-6">
  <div
    className="container-fluid bg-primary py-5 bg-hero2 mb-4 mb-lg-5" // Add mb-4 for mobile margin
    style={{ height: '400px', overflow: 'hidden', marginTop: '30px' }}
  >
    <div className="container py-5">
      <div className="row justify-content-start">
        <div className="col-lg-8 col-md-12 text-center text-lg-start">
          <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
          <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3 d-lg-inline d-md-none">
            Home
          </Link>
          <Link to="/about" className="btn btn-secondary py-md-3 px-md-5 d-lg-inline d-md-none">
            About Us
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid ">
    <div className="container">
      <div
        className="mx-auto text-center mb-5"
        style={{ maxWidth: '500px' }}
      >
        <h6 className="text-primary text-uppercase">Contact Us</h6>
        <h1 className="display-5">Please Feel Free To Contact Us</h1>
      </div>
      <div className="row g-0">
        <div className="col-lg-7">
          <div className="bg-primary h-100 p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control bg-light border-0 px-4 ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Your Full Name"
                  style={{ height: '55px' }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control bg-light border-0 px-4 ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder="Your Email"
                  style={{ height: '55px' }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className={`form-control bg-light border-0 px-4 ${
                    errors.phone ? 'is-invalid' : ''
                  }`}
                  placeholder="Your Phone Number"
                  style={{ height: '55px' }}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control bg-light border-0 px-4 py-3 ${
                    errors.message ? 'is-invalid' : ''
                  }`}
                  rows="4"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>
              <button
                className="btn btn-secondary w-100 py-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="bg-secondary h-100 p-4 p-md-5">
            <h2 className="text-white mb-4">Get In Touch</h2>
            <div className="d-flex mb-4">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '60px', height: '60px' }}
              >
                <i className="bi bi-envelope-open fs-4 text-white"></i>
              </div>
              <div className="ps-3">
                <h5 className="text-white">Email Us</h5>
                <span className="text-white">support@siddhvidhya.com</span>
              </div>
            </div>
            <div className="d-flex">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br></br>
    </>
  );
}
