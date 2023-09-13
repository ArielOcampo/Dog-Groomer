import React from "react";

import "./AboutUs.less";
import { PanyProfile, backgroundAbout } from "@/assets/";

const AboutUs = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: 20 }}>¿Quien soy?</h1>
      <section className="container-about">
        <div className="card">
          <div className="container-photo">
            <img className="photo" src={PanyProfile} alt="Foto carlos torres" />
          </div>
          <div className="container-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum
              culpa, omnis unde, cupiditate deserunt necessitatibus commodi,
              reiciendis quis nam facilis et minima quam provident facere.
              Repellendus quia dolorem aut.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
