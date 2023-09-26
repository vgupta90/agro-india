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
      category: 'Mushroom Farming',
      items: [
        {
          imgSrc: 'img/product-1.jpg',
          title: 'Button Mushroom',
          description: 'Mushrooms offer a plethora of health benefits. They are a rich source of essential nutrients like vitamins, minerals, and antioxidants. These nutrients support overall well-being and can boost the immune system. Mushrooms are low in calories and fat, making them a healthy addition to any diet, especially for weight management.'

      +'Additionally, certain mushroom varieties, such as shiitake and maitake, contain compounds with potential anti-cancer properties. These compounds may inhibit cancer cell growth and promote better health. Moreover, mushrooms are a valuable protein source for vegetarians and vegans due to their protein content.',
        },
      ],
    },
    {
      category: 'Saffron Farming',
      items: [
        {
          imgSrc: 'img/product-3.jpg',
          title: 'Saffron',
          description: 'Saffron, derived from the stigma of the saffron crocus flower, is a precious spice known for its vibrant red-orange color, unique flavor, and remarkable health benefits. This exquisite spice has been treasured for centuries and offers a wide range of advantages. Rich in antioxidants, saffron helps combat oxidative stress, reducing the risk of chronic diseases and cellular damage. Additionally, saffron may have mood-enhancing properties, potentially aiding in alleviating symptoms of mild to moderate depression. Its anti-inflammatory properties make it valuable in managing inflammatory conditions.',
        },
      ],
    },
    {
      category: 'Organic Farming',
      items: [
        {
          imgSrc: 'img/cabbage.jpeg',
          title: 'Cabbage',
          description: 'Cabbage is a highly nutritious vegetable known for its numerous health benefits. Its low in calories but packed with essential vitamins and minerals, making it an excellent addition to a balanced diet. Cabbage is particularly rich in vitamin C, which supports the immune system and helps maintain healthy skin. Additionally, it contains dietary fiber, aiding in digestion and promoting a feeling of fullness. This cruciferous vegetable also boasts antioxidants that combat harmful free radicals, potentially reducing the risk of chronic diseases. Incorporating cabbage into your meals can contribute to improved overall health and well-being.',
        },
        {
          imgSrc: 'img/tomato.jpeg',
          title: 'Tomato',
          description: 'Tomatoes are a nutritious and versatile fruit that offer several health benefits. They are rich in vitamins and antioxidants, making them a valuable addition to your diet. Tomatoes are an excellent source of vitamin C, which boosts the immune system, supports skin health, and aids in wound healing. Additionally, they contain lycopene, an antioxidant known for its potential to reduce the risk of chronic diseases, such as heart disease and certain cancers. Furthermore, tomatoes are low in calories and high in fiber, promoting weight management and digestive health. Regular consumption of tomatoes can contribute to overall well-being and a healthier lifestyle',
        },
        // {
        //   imgSrc: 'img/product-2-cucumber.jpg',
        //   title: 'Cucumber',
        //   description: 'Description for Cucumber',
        // },
      ],
    },
    {
      category: 'Polyhouse Farming',
      items: [
        {
          imgSrc: 'img/carousel-1.jpeg', // Example image, replace with the appropriate one
          title: 'Red and Yellow Capsicum',
          description: 'Red and yellow capsicum, also known as bell peppers, offer a range of health benefits. They are rich in essential vitamins, especially vitamin C, which supports a strong immune system and promotes healthy skin. These vibrant peppers also contain antioxidants that help reduce the risk of chronic diseases by fighting harmful free radicals. Red and yellow capsicum may contribute to heart health by lowering blood pressure and cholesterol levels. Additionally, their sweet and crunchy taste makes them a delicious and nutritious addition to various dishes, adding color, flavor, and essential nutrients to your meals. Incorporating these colorful peppers into your diet can improve both your overall health and the taste of your favorite recipes',
        },
        {
          imgSrc: 'img/Cucumbers.jpeg', // Example image, replace with the appropriate one
          title: 'Cucumber',
          description: 'Cucumbers offer a refreshing and hydrating addition to your diet. They are low in calories and high in water content, making them an excellent choice for staying hydrated during hot weather. Cucumbers are rich in vitamins and minerals, particularly vitamin K, which supports bone health, and potassium, which helps regulate blood pressure. Additionally, they contain antioxidants that help reduce inflammation and promote healthy skin. Their high fiber content aids in digestion and can contribute to weight management. Incorporating cucumbers into your meals is an easy way to boost your nutrient intake and maintain overall health.',
        },
      ],
    },
    {
      category: 'Fruits Farming',
      items: [
        {
          imgSrc: 'img/product-4.jpg',
          title: 'Papaya',
          description: 'Papaya is a tropical fruit renowned for its numerous health benefits. Rich in essential vitamins and minerals, such as vitamin C, vitamin A, and potassium, papaya promotes overall well-being. Its antioxidants, like beta-carotene and lutein, protect cells from oxidative stress and reduce the risk of chronic diseases. Papaya digestive enzymes, papain and chymopapain, aid in digestion and nutrient absorption. Additionally, its high vitamin C content boosts the immune system, while its beta-carotene and vitamin E support skin health, making it a valuable addition to a balanced diet and skincare regimen.',
        },
        {
          imgSrc: 'img/Anjeer.jpg',
          title: 'Anjeer',
          description: 'Anjeer, also known as figs, is a nutrient-rich fruit packed with health benefits. These sweet and delicious fruits are a rich source of dietary fiber, aiding in digestion and promoting regular bowel movements. Anjeer is known to be an excellent source of essential minerals like potassium and magnesium, which support heart health by regulating blood pressure and preventing hypertension. Additionally, its high calcium content contributes to bone health, making it a great choice for maintaining strong bones and preventing osteoporosis. The antioxidants in Anjeer help combat oxidative stress, reducing the risk of chronic diseases and supporting overall well-being. ',
        },
        {
          imgSrc: 'img/guava.jpeg', // Example image, replace with the appropriate one
          title: 'Guava',
          description: 'Guava is a tropical fruit celebrated for its numerous health benefits. Rich in vitamin C, guava boosts the immune system, promotes healthy skin, and aids in digestion. It contains dietary fiber, aiding in weight management and digestive health. Guavas antioxidants combat free radicals, reducing the risk of chronic diseases. Additionally, it supports heart health by regulating blood pressure and cholesterol levels. Incorporating guava into your diet can contribute to overall well-being and a delicious tropical flavor experience.',
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
