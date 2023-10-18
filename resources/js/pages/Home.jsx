import React from "react";

import { AboutUs, Carousel, Footer, Gallery, NavBar, Reviews } from "../common";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <NavBar />

      <Carousel />

      <AboutUs />

      <div className="container justify-center">
        <div xs={12}>
          {/* <Typography sx={{ textAlign: "center", padding: 2, fontSize: 22 }}>
              Lo que nuestros clientes opinan:
            </Typography> */}

          <Reviews />

          <Typography
            sx={{ textAlign: "center", padding: "8px 0", fontSize: 22 }}
          >
            Algunos de nuestros trabajos:
          </Typography>

          <Gallery />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
