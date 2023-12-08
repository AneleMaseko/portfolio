import React from "react";
import "./testimonials.css"
import Image1 from "../../Asserts/blankprofile.webp";
import Image3 from "../../Asserts/blankprofile.webp";

// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/pagination';


const data =  [
  {
    id: 1,
    image: Image1,
    title:"Mr Mthethwa",
    subtitle: "Web Developer at Adom Technologies",
    comment:
        "I enjoy working with you. You really are self driven and help your surrounding to do better. Wish you all the best! 🤝",
  },
  {
    id: 2,
    image:Image3,
    title:"Ms Monamo",
    subtitle: "Web Developer And DevOps Engineer at UVU Africa",
    comment:
        "I enjoy working with you in a team and learned so much. Good luck! 👍🏼",
  },

];

const Testimonials = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Clients & Reviews</h2>

            <Swiper className="testimonials__container grid"
                  // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop = {true}
      grabCursor={true}
      pagination={{ clickable: true }}
      
            >
                {data.map(({id, image, title, subtitle, comment}) =>{
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonials__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })} 
            </Swiper>
        </section>
    )
}

export default Testimonials
 
