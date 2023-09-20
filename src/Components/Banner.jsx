import React from 'react'

export default function Banner() {
  return (
    <div className="container-fluid banner mb-5">
    <div className="container">
        <div className="row gx-0">
            <div className="col-md-6">
                <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                    <h3 className="text-white mb-3">Organic farming </h3>
                    <p className="text-white">Organic farming is a sustainable agricultural practice that prioritizes the use of natural methods and avoids synthetic chemicals and genetically modified organisms.</p>
                    {/* <a className="text-white fw-bold" href="">Read More<i className="bi bi-arrow-right ms-2"></i></a> */}
                </div>
            </div>
            <div className="col-md-6">
                <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                    <h3 className="text-white mb-3">Fruits farming</h3>
                    <p className="text-white">Fruit farming, including the cultivation of fruits like Papaya, Anjeer (Fig), and Guava, plays a vital role in providing a diverse and nutritious diet to people around the world. These fruits are not only delicious but also rich in vitamins, minerals, and fiber</p>
                    {/* <a className="text-white fw-bold" href="">Read More<i className="bi bi-arrow-right ms-2"></i></a> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
