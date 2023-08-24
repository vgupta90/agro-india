import React from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Facts from "./Facts";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <>
    <Carousel/> 
     <Banner/> 
       <AboutUs />
      <Facts />
      <Features/>
      
    </>
  );
}
