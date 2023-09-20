import React from "react";
import AboutUs from "./AboutUs";
import Facts from "./Facts";
import { Link } from "react-router-dom";
import TeamMembersSection from "./TeamMembersSection";

export default function () {
  return (
    <div className="container-fluid p-6">
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">About Us</h1>
              <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AboutUs />
      {/* <Facts /> */}

      {/* <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                    <img className="img-fluid mt-auto mx-auto" src="./img/about.png"/>
                </div>
            </div> */}

      <div className="about-main">
			<div className="row">
            <div className="col-lg-8">
					<h2 className="text-center">Our Mission & Vision</h2>
					<p>At Siddhvidhya, our mission is to lead the way in sustainable and organic agriculture, creating a positive impact on our planet and society. We are committed to producing wholesome, chemical-free food and promoting responsible land stewardship.</p>
					<p>We strive to provide communities with access to nutritious, organic food that promotes well-being. Our mission is to contribute to healthier lifestyles and reduce the reliance on harmful chemicals in agriculture.</p>
					<p>Our vision is a world where organic farming is the cornerstone of agriculture, benefiting both people and the planet.A world where our farms serve as vibrant ecosystems, supporting diverse wildlife, healthy soil, and clean water.</p>
          <p>Our mission is to lead by example, cultivating a future where organic farming is the norm rather than the exception, and our vision is a world where the benefits of organic agriculture are realized by all, creating a healthier, more sustainable planet for generations to come.</p>
      	</div>
				<div className="col-lg-4">
					<img className="img-fluid mt-auto mx-auto" src="./img/carousel-3.jpg" alt="" />
				</div>
				
			</div>
			
		</div>


<TeamMembersSection/>



<>
  
    </>
    </div>
  );
}
