import { useEffect, useState } from "react";

import "./reviews.css";
import { Avatar1 } from "@/assets";
import { RatingG } from "..";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // return new Response("ok", { headers, status: 200 });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const headers = new Headers();
  //     headers.set("Access-Control-Allow-Origin", "*");

  //     const data = await fetch(
  //       "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJd343eGCjMpQRAZmVCASdG3Q&key=AIzaSyCfu0D8IySUJH9dXOJ2q5-vkNdMeX6atxI",
  //       {
  //         headers,
  //         status: 200,
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  console.log(reviews);
  return (
    <section id="testimonials">
      {/* <div className="testimonials-heading">
        <span>Comentarios </span>
        <h1>¿Que opinan nuestros clientes?</h1>
      </div> */}

      <div className="testimonial-box-container">
        <div className="testimonial-box">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src={Avatar1} alt="Perfil" />
              </div>
              <div className="name-user">
                <strong>Armando Paredes</strong>
              </div>
            </div>
            <div className="reviews">
              <RatingG />
            </div>
          </div>
          <div className="client-comment">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              maiores rem vel porro dolore architecto voluptatibus placeat
              excepturi sit. Accusantium sed, repudiandae perspiciatis quia
              distinctio similique aspernatur molestias fugiat numquam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
