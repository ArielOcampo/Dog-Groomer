import { useEffect, useState } from "react";

import "./reviews.css";
import { Avatar1 } from "@/assets";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJd343eGCjMpQRAZmVCASdG3Q&key=AIzaSyCfu0D8IySUJH9dXOJ2q5-vkNdMeX6atxI"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  // console.log(reviews);
  return (
    <section id="testimonials">
      <div className="testimonials-heading">
        <span>Comentarios </span>
        <h1>Clientes dicen</h1>
      </div>

      <div className="testimonial-box-container">
        <div className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src={Avatar1} alt="Perfil" />
              </div>
              <div className="name-user">
                <strong>Persona 1</strong>
              </div>
            </div>
            <div className="reviews"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
