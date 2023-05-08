import React from "react";

import "./Carousel.less";
import { Banner } from "@/assets/";

const Carousel = () => {
  return (
    <section className="carousel-box">
      <img src={Banner} alt="" />
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
    </section>
  );
};
export default Carousel;
