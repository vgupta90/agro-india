import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Features() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://deveinvoice.invopay.com.au:8443/invopay/getCount');
  setCount(response.data.data);
  console.log(response.data.data);

}
    
    fetchData();

  
  }, []);
  return (
    <div className="container-fluid bg-primary feature py-5 pb-lg-0 my-5">
      <div className="container py-5 pb-lg-0">
        <div
          className="mx-auto text-center mb-3 pb-2"
          style={{ maxWidth: "500px" }}
        >
          <h6 className="text-uppercase text-secondary">Features</h6>
          <h1 className="display-5 text-white">Why Choose Us!!!</h1>
          <h5 className=" text-white">Visitor's count: {count}</h5>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 d-none d-md-block">
            <div className="text-white mb-5">
              <div
                className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-seedling fs-4 text-white"></i>
              </div>
              <h4 className="text-white">100% Organic</h4>
            </div>
            <div className="text-white">
              <div
                className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-award fs-4 text-white"></i>
              </div>
              <h4 className="text-white">Awarded</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
              <p>
                Our guiding principle is to consistently make the best choices
                in all aspects of our business. This philosophy influences every
                facet, from our products and processes to our team members. It
                serves as a constant reminder to uphold the highest
                sustainability standards, motivates our staff to excel, and
                maintains a positive and rooted approach in everything we do.
              </p>
              <img className="img-fluid" src="img/feature.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3 d-none d-md-block">
            <div className="text-white mb-5">
              <div
                className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-tractor fs-4 text-white"></i>
              </div>
              <h4 className="text-white">Modern Farming</h4>
            </div>
            <div className="text-white">
              <div
                className="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt fs-4 text-white"></i>
              </div>
              <h4 className="text-white">Support</h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  );
}
