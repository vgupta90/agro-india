import React, { useEffect } from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Facts from "./Facts";
import Carousel from "./Carousel";

export default function Home() {


  return (
    <>
      <Carousel />
      <Banner />

      {/* <VisitorCounter/> */}

      <AboutUs />
      <Features />
    </>
  );
}
