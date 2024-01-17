import React from 'react';

export default function Facts() {
  const factItems = [
    {
      icon: 'fa-star',
      text: 'Finest Quality',
    },
    {
      icon: 'fa-users',
      text: 'Happy Clients',
    },
    {
      icon: 'fa-check',
      text: 'Timely Delivery',
    },
    {
      icon: 'fa-mug-hot',
      text: 'Budget-friendly',
    },
  ];

  return (
    <div className="container-fluid bg-primary facts py-4 mb-5">
      <div className="container py-5">
        <div className="row gx-5 gy-4">
          {factItems.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="d-flex">
                
                <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    
                  <i className={`fa ${item.icon} fs-4 text-white`}></i>

                </div>
                <div className="ps-4"><br></br>
                  <h5 className="text-white">{item.text}</h5>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
