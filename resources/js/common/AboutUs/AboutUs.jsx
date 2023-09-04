import React from "react";

import "./AboutUs.less";
import { Pany } from "@/assets/";

const AboutUs = () => {
  return (
    <>
      <h1>¿Quien soy?</h1>
      <div className="container-about">
        <img className="photo" src={Pany} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At earum
          culpa, omnis unde, cupiditate deserunt necessitatibus commodi,
          reiciendis quis nam facilis et minima quam provident facere.
          Repellendus quia dolorem aut.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
