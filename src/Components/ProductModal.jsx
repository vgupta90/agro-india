import React from 'react';
import Modal from 'react-modal';

const customModalStyles  = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Specify the root element to handle accessibility

const ProductModal = ({ isOpen, closeModal, product }) => {
  return (
    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={closeModal}
    //   style={customStyles}
    //   contentLabel="Product Modal"
    // >
    //     <div
    //     style={{
    //       backgroundImage: `url(${product.imgSrc})`, // Set the background image
    //       // height: '100%', // Set a height to cover the entire modal
    //       display: 'flex',
    //       height: '400px', // Set desired height for the modal
    //       width: '600px',
    //       // backgroundPosition: 'center',
    //       // flexDirection: 'column',
    //        justifyContent: 'space-between', // Adjust content positioning
    //       // padding: '20px', // Add padding for content
    //        position: 'relative',
    //     }}
    //     >
    //     <h4  >{product.title}</h4>
    //      </div>
      
    //   <p className="mb-4">{product.description}</p>
     
    //   <p className="btn btn-primary py-md-2 px-md-4 me-3" onClick={closeModal}>Close</p>
     
     
    // </Modal>

    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={customModalStyles}
    contentLabel="Product Modal"
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center', // Center content horizontally
        height: '100%', // Set height to cover the entire modal
      }}
    >
      <img
        src={product.imgSrc}
        alt={product.title}
        style={{
          maxWidth: '60%',
          maxHeight: '60%', // Adjust the maximum height if needed
          objectFit: 'contain', // Maintain image's aspect ratio
        }}
      />
      <div>
        <h4>{product.title}</h4>
        </div>
        </div>
        <p className="mb-4">{product.description}</p>
        <button className="btn btn-primary py-md-2 px-md-4 me-3" onClick={closeModal}>
          Close
        </button>
      
   
  </Modal>

  );
};

export default ProductModal;