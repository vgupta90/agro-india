import React from 'react';

export default function Banner() {
  return (
    <div className="container-fluid banner mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-4 p-md-5" style={{ minHeight: '300px' }}>
              <h3 className="text-white mb-3">Organic farming</h3>
              <p className="text-white">Organic farming is a sustainable agricultural practice that prioritizes the use of natural methods and avoids synthetic chemicals and genetically modified organisms.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-4 p-md-5" style={{ minHeight: '300px' }}>
              <h3 className="text-white mb-3">Fruits farming</h3>
              <p className="text-white">Fruit cultivation, such as Papaya, Anjeer, and Guava, offers a global source of diverse, nutritious food rich in vitamins, minerals, and fiber.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
