import React from 'react'

export default function AboutUs() {
  return (
    <div className="container-fluid about pt-5">
    <div className="container">
        <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="d-flex h-100 border border-5 border-primary border-bottom-0 pt-4">
                    <img className="img-fluid mt-auto mx-auto" src="./img/about.png"/>
                </div>
            </div>
            <div className="col-lg-6 pb-5">
                <div className="mb-3 pb-2">
                    <h6 className="text-primary text-uppercase">About Us</h6>
                    <h1 className="display-5">We Produce Organic Food For Your Family</h1>
                </div>
                <p className="mb-4">Our commitment to organic farming is unwavering. We believe that by nurturing the earth and following sustainable agricultural practices, we can deliver food that not only tastes exceptional but is also good for your health and the environment.
                
                <br></br> <br></br>
                We believe in the power of organic food to nourish your body and soul. Our products are rich in nutrients and essential vitamins, promoting overall well-being and a healthier lifestyle for your family.
                
                </p>
                <div className="row gx-5 gy-4">
                    <div className="col-sm-6">
                        <i className="fa fa-seedling display-1 text-secondary"></i>
                        <h4>100% Organic</h4>
                        {/* <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p> */}
                    </div>
                    {/* <div className="col-sm-6">
                        <i className="fa fa-award display-1 text-secondary"></i>
                        <h4>Award Winning</h4>
                         <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p> 
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
