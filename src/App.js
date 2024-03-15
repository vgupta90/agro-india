import React, { useEffect, useState } from 'react';
import "./Components/Style.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Product from "./Components/Product";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Export from "./Components/Export";
import Ecommerce from "./Components/Ecommerce";
import Ecommercehome from "./Components/Ecommercehome";
import axios from 'axios';

function App() {
  
  
  
  const [count, setCount] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('https://deveinvoice.invopay.com.au:8443/invopay/updateCount');
  
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };
  
    fetchData();
  
  
  }, []);

  
  
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/export" element={<Export/>}/>
          <Route path="/ecommerce" element={<Ecommercehome/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
     
    </>
  );
}

export default App;
