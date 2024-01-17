import React from 'react'
import { Link } from "react-router-dom";
import CustomerReviews from './CustomerReviews';
import Facts from './Facts';
import ServiceSection from './ServiceSection';
import CarouselPartner from './CarouselPartner';

export default function Export() {
  return (
    <>
        <div className="container-fluid bg-primary py-5 bg-hero3 mb-4 mb-lg-5" style={{ height: '400px', overflow: 'hidden', marginTop: '30px' }}>
      <div className="container py-5">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-lg-8 col-md-12 text-center text-lg-start">
          <h1 className="display-1 text-white" style={{  textShadow: '2px 2px 4px rgba(0, 0, 0, 2.9)', marginBottom: '1.5rem' }}>Export</h1>
            <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3 d-lg-inline d-md-none">
              Home
            </Link>
            <Link to="/product" className="btn btn-secondary py-md-3 px-md-5 d-lg-inline d-md-none">
              Products
            </Link >
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-center">Why Choose Us</h1>
    <div className="about-main2"style={{ marginTop: '0' }}>
      <div className="row">
        <div className="col-lg-7">
          <p>When it comes to buy top quality products like Fresh Export QualityGreen Chilli  Vegetables and fruits,  Spices, Maize and pulses , you must have a reliable and experienced supplier from reputed markets. Siddhvidhya Agro Export has been doing a Business of Export and wholesale trading of Fresh Export Quality Green Chilli , Vegetables and fruits,  Spices, Maize and pulses one of the Globalgap Certified Fresh Fruits & Vegetable Exporters from India</p>
          <p>Being Top Supplier Wholesaler, Exporter or Trader of Fresh Export Quality Agriculture Comodities, Narmdapuram, We combine years of experience and growing tradition along with latest agriculture techniques and knowledge. We have a group of well educated and smart farmers where in they manufacture superior quality fruits and vegetables in their orchids and supply the same to us</p>
          <p>We have well trained and experienced staff for packing of Fresh Export Quality AgricultureProducts. Our professional team is ready round the clock for quality inspection, grading, packing and loading the container or truck.</p>
          <p>Our advance network of transportation will forward the cargo to any place in the world. We provide Exwork, FOB, CNF and CIF to all major port and Airports in India and across the globe</p>
        </div>
        <div className="col-lg-5">
          <img className="img-fluid mt-auto mx-auto" style={{ maxWidth: '100%', height: '95%' }} src="./img/Chillis-4odanWyng-transformed.jpg" alt="" />
        </div>
      </div>
    </div>



    {/* <h1 className="text-center">Why Choose Us</h1> */}
    <div className="about-main2"style={{ marginTop: '0' }}>
      <div className="row">
      <div className="col-lg-5">
          <img className="img-fluid mt-auto mx-auto" style={{ maxWidth: '100%', height: '95%' }} src="./img/istockphoto-155151259-2048x2048-transformed.jpg" alt="" />
        </div>
        <div className="col-lg-7">
          <p>When it comes to buy top quality products like Fresh Export QualityGreen Chilli  Vegetables and fruits,  Spices, Maize and pulses , you must have a reliable and experienced supplier from reputed markets. Siddhvidhya Agro Export has been doing a Business of Export and wholesale trading of Fresh Export Quality Green Chilli , Vegetables and fruits,  Spices, Maize and pulses one of the Globalgap Certified Fresh Fruits & Vegetable Exporters from India.</p>
          <p>Being Top Supplier Wholesaler, Exporter or Trader of Fresh Export Quality Agriculture Comodities, Narmdapuram, We combine years of experience and growing tradition along with latest agriculture techniques and knowledge. We have a group of well educated and smart farmers where in they manufacture superior quality fruits and vegetables in their orchids and supply the same to us.</p>
          <p>We have genuinely acquired all the necessary certifications required in an authentic manner for the export and Wholesale Supply of Fresh Export Quality Products. This help us to provide the best unmatched quality fruits and vegetables and various Agriculture Comodities to all our consumers.</p>
          <p>We are committed to supply quality and fresh produce to our customers and enhance the customer satisfaction levels through continual improvement in our process and to become leader in the market.</p>
        </div>
        
      </div>
    </div>
<Facts/>



<div className="about-main2"style={{ marginTop: '0' }}>
      <div className="row">
      <h1 className="text-left">Process of Order:</h1>
      {/* <div className="col-lg-5">
          <img className="img-fluid mt-auto mx-auto" style={{ maxWidth: '100%', height: '95%' }} src="./img/istockphoto-155151259-2048x2048-transformed.jpg" alt="" />
        </div> */}
        <div className="col-lg-11">
          <p>When you place a Buy order or Purchase order of Fresh Export Quality Agriculture Products with siddhvidhya Agro Narmdapuram, India, it goes through 4 different stages as below..</p>
          <p>Farm Visit: The process of quality check starts right from the farm. We have a dedicated team that goes on farm visits throughout India and interacts with farmers to obtain their opinions on the quality of soil and suitable weather conditions for new crops.</p>
          <p>Agriculture Products acquisition: The second stage involves the procurement of Products like Fresh Export Quality AgricultureProducts . All basic materials are acquired with immense care from either the market or directly from the farmers.</p>
          <p>Processing and packaging: Next, we have a team of specialists wholly for processing, packing and loading. Throughout the procedure we are extremely alert to make sure no extraneous matter are spotted in our cargo</p>
          <p>Shipping: Finally, for the shipping process we use third party certification and also in house checklists to inspect every container we use to ship the cargo. All containers are thoroughly checked to meet the food safety standards before transportation.</p>
        </div>
        
      </div>
    </div>

    <ServiceSection/>
    {/* <CustomerReviews/> */}
    <br></br>
    <h1 className="text-center">Our Partners</h1>
    {/* <br></br> */}
    {/* <div class="container">
  <div class="row">
    <div class="col-6 col-md-2 col-lg-3">
      <img src="/img/msme.png" class="img-fluid rounded" alt="..." />
    </div>
    <div class="col-6 col-md-2 col-lg-3">
      <img src="/img/ECGC.jpeg" class="img-fluid rounded" alt="..." />
    </div>
    <div class="col-6 col-md-2 col-lg-3">
      <img src="/img/Ice-gate.jpg" class="img-fluid rounded" alt="..." />
    </div>
    <div class="col-6 col-md-2 col-lg-3">
      <img src="/img/WhatsApp Image 2023-10-23 at 5.26.00 AM.jpeg" class="img-fluid rounded" alt="..." />
    </div>
    <div class="col-6 col-md-2 col-lg-3">
      <img src="/img/WhatsApp Image 2023-10-23 at 5.34.25 AM.jpeg" class="img-fluid rounded" alt="..." />
    </div>
    <div class="col-6 col-md-3 col-lg-3">
      <img src="/img/WhatsApp Image 2023-10-23 at 5.35.13 AM.jpeg" class="img-fluid rounded" alt="..." />
    </div>
  </div>
</div> */}



<CarouselPartner/>

<br></br>

   


  
    <br></br>
    
    <br></br>
    
    
    </>
  )
}
