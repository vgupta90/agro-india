import React, { useEffect } from "react";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Facts from "./Facts";
import Carousel from "./Carousel";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <Carousel />
      <Banner />
      <AboutUs />
      <Features />
    </>
  );
}
