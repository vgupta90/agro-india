import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from 'mdb-react-ui-kit';
import ProductModal from './ProductModal';

export default function Ecommerce() {
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

  // Check the screen width to determine whether to apply top margin
  const isSmallScreen = window.innerWidth < 768;

  // Calculate the marginTop value based on the screen width
  const modalMarginTop = isSmallScreen ? '50%' : 'auto';

  // Set the modal styles
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80%',
      maxHeight: '80%',
      overflow: 'auto',
      marginTop: modalMarginTop, // Apply margin based on screen width
    },
  };

  const products = [
    {
      category: 'Vitamins',
      items: [
        {
          imgSrc: 'img/SIDDHEARTH MULTIVITAMIN TABLATE 011.jpg',
          title: 'MULTIVITAMIN',
          description:"Siddhiprad Health Essentials Multivitamin for Men and Women, 60 Multivitamin Tablets, with Zinc, Vitamin C, Vitamin D3, Calcium, Biotin Vitamin B12 & 22 Essential Nutrients, minerals and Ginseng Extract, Enhances Overall Health of Heart, Kidney, Bones, Joints, Muscles, Skin, Energy, Stamina & Immunity. An active and fit lifestyle demands optimum energy levels. Siddhiprad Health Essentials Daily Multivitamin tablets are formulated to enhance the energy levels of the body to support an active lifestyle, quick recovery, and repair."


     
        },
        {
            imgSrc: 'img/SIDDHEARTH VITAMIN C TAB 01.jpg',
            title: 'VITAMIN C',
            description:  "Siddhiprad Vitamin C with Zinc & Moringa Extract is an important nutrient for the functioning of white blood cells. Protecting your cells against the effects of free radical damage, vitamin C tablets help the body ward off the effects of oxidative stress. These Vitamin C supplements are also one of the best antioxidants for fighting free radicals. Vitamin C zinc tablets support a healthy immune system. This vitamin C product is not intended to diagnose, treat, cure, or prevent any disease. Vitamin C Along with Zinc & Moringa Extract is the effective combination made for supporting immunity."

  
      
          }
      ],
    },
    

    
    {
      category: 'Ayurvedic',
      items: [
        {
          imgSrc: 'img/ashwagandha capsuel 01.jpg',
          title: 'ASHWAGANDHA',
          description:  "Siddhiprad Ashwagandha Capsules are scientifically proven formula made with 100% pure extracts of the finest quality Ashwagandha with 2x Immunity. Siddhiprad Ashwagandha Capsules are easy to take and help you to relax by managing your stress levels after a strenuous day while relieving fatigue and weakness as well as restoring your natural body strength. Regular consumption of Siddhiprad Ashwagandha Capsules can improve overall immunity. It also helps combat debility occurring due to old age and nervousness and anxiety. As an Ayurvedic herb, it is known to combat insomnia, boosting energy and increasing the body's stamina and vitality. Ashwagandha is an immunomodulator that helps boost immunity and also exhibits strong antioxidant activity, which helps to decrease oxidative stress. Siddhiprad Ashwagandha exhibits neuroprotective action that helps to strengthen the neurons (functional unit of the brain), which can help improve cognitive functions like learning, concentration, memory, etc."

        },
        {
          imgSrc: 'img/SIDDHEARTH TULSI 01.jpg',
          title: 'TULSI DROPS',
          description: "Siddhiprad Panch Tulsi Drops is an Ayurvedic formulation made with a punch of five different types of tulsi - Kala Tulsi, Marua Tulsi, Rama Tulsi, Bisva Tulsi, Lemon Tulsi. It helps boost the system’s immunity levels and builds body resistance against pathogens. It helps in keeping allergies in check and combats common infections. Mix 5-10 drops in a glass of water and feel free to consume it 4-5 times a day. You can also add this to your tea or juice to give it a nutritious boost. One of the key Siddhiprad Panch tulsi Drop benefits includes strengthening your immunity shield. Tulsi is rich in Vitamin C and zinc, which makes it a natural immunity booster."
          ,
        },

      ],
    },

    {
        category: 'Herbal',
        items: [
          {
            imgSrc: 'img/SIDDHEARTH STEVIA DROPS 01.jpg',
            title: 'STEVIA DROPS',
            description: "Siddhiprad Stevia Drops allows you to switch from sugar to zero-carb sweetness with just a few drops. Enjoy sweetness in your coffee, beverages, or foods without any glycemic response. Siddhiprad Stevia Drops are Diabetic, Keto, Gluten Free, and Vegan Friendly. There is truly something for everyone. Siddhiprad Stevia Drops are a natural liquid stevia sweetener that adds sweetness to anything without any calories or sugar with just a few drops! Add Tea, coffee, smoothies, dressings, and your favorite dessert, making it easy to maintain a Keto, Vegan, and Gluten Free lifestyle and/or reach your health and fitness goals."

          },
          {
            imgSrc: 'img/SIDDHEARTH GREEN FIT 01.jpg',
            title: 'GREEN FIT',
            description: "Siddhiprad Green Tea Extract Vegetarian Capsules have green tea extract. The extract is mainly derived from the leaves of green tea. Green tea contains antioxidants in a great amount which are beneficial for human health. Each capsule of Siddhiprad Green Tea Extract Vegetarian Capsules contains of green tea extract. The extract is very helpful in maintaining glowing skin and keeps it healthy and fresh. The antioxidants present in the extract promotes metabolism which helps in weight management. A proper metabolism is necessary for a healthy body and hence this extract helps in getting it indirectly. It can also help you to have a strong immune system, a healthy body with maintained healthy pressure in the blood and many other health benefits. It can help you in getting a healthy body and mind."
        },

        ],
      },



  ];


  return (
    <MDBContainer fluid className="my-5 text-center">
      {products.map((category, index) => (
        <div key={index}>
          <div style={{ backgroundColor: '#f93', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 className="mt-4 mb-3 text-left text-white">
              <strong>{category.category}</strong>
            </h3>
          </div>
          <br />
          <MDBRow>
            {category.items.map((product, productIndex) => (
              <MDBCol key={productIndex} md="6" lg="4" className="mb-4 service-item">
                <MDBCard onClick={() => openModal(product)} className="product-card">
                  <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded">
                    <MDBCardImage src={product.imgSrc} fluid className="w-100 product-image" /> {/* Add w-100 class */}
                  </MDBRipple>
                  <MDBCardBody className="product-card-body text-left">
                    <h4 className="display-8">{product.title}</h4>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      ))}
      {/* Render the modal */}
      {selectedProduct && (
        <ProductModal isOpen={modalIsOpen} closeModal={closeModal} product={selectedProduct} customStyles={modalStyles} />
      )}
    </MDBContainer>
  );

}

