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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
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
