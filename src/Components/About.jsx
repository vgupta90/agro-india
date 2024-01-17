import React from "react";
import AboutUs from "./AboutUs";
import Facts from "./Facts";
import { Link } from "react-router-dom";
import TeamMember from "./TeamMember";
import teamMembersData from './teamMembers.json';
import { useEffect } from "react";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="container-fluid p-6">
    <div className="container-fluid bg-primary py-5 bg-hero mb-4 mb-lg-5" style={{ height: '400px', overflow: 'hidden', marginTop: '30px' }}>
      <div className="container py-5">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-8 col-md-12 text-center text-lg-start">
          <h1 className="display-1 text-white" style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 2.9)', marginBottom: '1.5rem' }}>About Us</h1>
            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3 d-lg-inline d-md-none">
              Home
            </Link>
            <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 d-lg-inline d-md-none">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  
    <AboutUs />
  
    <div className="about-main"style={{ marginTop: '0' }}>
      <div className="row">
        <div className="col-lg-8">
          <h2 className="text-center">Our Mission & Vision</h2>
          <p>At Siddhvidhya, our mission is to lead the way in sustainable and organic agriculture, creating a positive impact on our planet and society. We are committed to producing wholesome, chemical-free food and promoting responsible land stewardship.</p>
          <p>We strive to provide communities with access to nutritious, organic food that promotes well-being. Our mission is to contribute to healthier lifestyles and reduce the reliance on harmful chemicals in agriculture.</p>
          <p>Our vision is a world where organic farming is the cornerstone of agriculture, benefiting both people and the planet. A world where our farms serve as vibrant ecosystems, supporting diverse wildlife, healthy soil, and clean water.</p>
          <p>Our mission is to lead by example, cultivating a future where organic farming is the norm rather than the exception, and our vision is a world where the benefits of organic agriculture are realized by all, creating a healthier, more sustainable planet for generations to come.</p>
        </div>
        <div className="col-lg-4">
          <img className="img-fluid mt-auto mx-auto" src="./img/carousel-3.jpg" alt="" />
        </div>
      </div>
    </div>
  
    <div className="container text-center">
      <div className="row">
        <h1 className="text-center">Management & Directors</h1>
        <br /><br /> <br /><br />
        {teamMembersData.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            imageSrc={member.imageSrc}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  </div>
  
  );
}
