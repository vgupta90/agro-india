import React,{ useState } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
  } from "mdb-react-ui-kit";
  import ProductModal from './ProductModal';

export default function ProductCart() {
    const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };
    const products = [
        {
          imgSrc: "img/product-1.jpg",
           title: 'Mushrooms',
           description: "Mushrooms are nature’s hidden treasure: always in season and grown year-round.",
          // price: '$19.00',
        },
        {
          imgSrc: "img/product-2.jpg",
           title: 'Organic Vegetableess',
           description: "Coming Soon",
          // price: '$19.00',
        },
        {
          imgSrc: "img/product-3.jpg",
          title: 'Organic Vegetableess 2',
          description: "Coming Soon",
          // price: '$19.00',
        },
        {
          imgSrc: "img/product-4.jpg",
           title: 'Organic Vegetableess 4',
           description: "Coming Soon",
          // price: '$19.00',
        },
        // Add more products as needed
      ];

  return (
    <MDBContainer fluid className="my-5 text-center">
      {/* <h4 className="mt-4 mb-5">
        <strong>Bestsellers</strong>
      </h4> */}
      <MDBRow>

        {products.map((product, index) => (
           
          <MDBCol key={index} md="6" lg="4" className="mb-4 service-item"  >
            <MDBCard   onClick={() => openModal(product)}
             style={{
                 height: '300px', // Set the desired height for the parent card
    
               }} 
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded  "
               
              >
               
                <MDBCardImage
                  src={product.imgSrc}
                  fluid
                  className="w-120 product-image"
                />
              
              </MDBRipple>
              <MDBCardBody className="product-card-body">
               
                  <h4 className="display-8">{product.title}</h4>
               
                
               
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        ))}
      </MDBRow>
       {/* Render the modal */}
       {selectedProduct && (
        <ProductModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          product={selectedProduct}
        />
      )}
    </MDBContainer>
  )
}
