import React from 'react';
import './Review.css';

const testimonialData = [
  {
    name: 'Maria Smantha',
    imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
    bgColor: '#9d789b',
    text: 'Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.',
  },
  {
    name: 'Lisa Cudrow',
    imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    bgColor: '#7a81a8',
    text: 'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
  },
  {
    name: 'Lisa Cudrow',
    imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
    bgColor: '#7a81a8',
    text: 'Neque cupiditate assumenda in maiores repudi mollitia architecto.',
  },
 
];

const CustomerReviews = () => {
  return (
    <div>
      <section style={{ width: '80%', margin: '0 auto' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">What Our Clients Say</h3>
          </div>
        </div>

        <div className="row text-center d-flex align-items-stretch">
          {testimonialData.map((testimonial, index) => (
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" key={index}>
              <div className="card testimonial-card">
                <div className="card-up" style={{ backgroundColor: testimonial.bgColor }}></div>
                <div className="avatar mx-auto bg-white">
                  <img src={testimonial.imgSrc} className="rounded-circle img-fluid" alt={testimonial.name} />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">{testimonial.name}</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2"></i>{testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
