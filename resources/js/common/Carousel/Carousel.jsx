import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "./Carousel.less";
import { Banner } from "@/assets/";

// // import required modules
// import { EffectFade, Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <section>
        <img src={Banner} alt="" />
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
      </section>
      {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};
export default Carousel;
