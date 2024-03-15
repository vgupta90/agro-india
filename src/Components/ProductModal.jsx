import React from 'react';
import Modal from 'react-modal';

const customModalStyles  = {

  content: {
     display: 'flex',
     flexDirection: 'column', // or 'row' based on your layout needs
    justifyContent: 'flex-end', // or 'space-between', 'flex-start', 'flex-end', etc.
    alignItems: 'flex-start', // or 'flex-start', 'flex-end', etc. based on your layout needs
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    marginTop:'2%',
    transform: 'translate(-50%, -40%)',
    maxWidth: '80%', // Set the maximum width for the modal content
    maxHeight: '80%', // Set the maximum height for the modal content
    overflow: 'auto', // Enable scrolling if content overflows the modal
  },
};

Modal.setAppElement('#root'); // Specify the root element to handle accessibility

const ProductModal = ({ isOpen, closeModal, product }) => {
  return (

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
          maxWidth: '40%',
          maxHeight: '40%', // Adjust the maximum height if needed
          objectFit: 'contain', // Maintain image's aspect ratio
        }}
      />
      <div>
        <h4>{product.title}</h4>
        </div>
        </div>
        <p className="mb-4" style={{ textAlign: 'justify', textJustify: 'inter-word', textAlignLast: 'left' }}>{product.description}</p>
        <button className="btn btn-primary py-md-2 px-md-4 me-3" onClick={closeModal}>
          Close
        </button>
      
   
  </Modal>

  );
};

export default ProductModal;