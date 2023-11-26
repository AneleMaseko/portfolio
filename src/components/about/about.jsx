import React from "react";
import '../about/about.css';
import Image from "../../Asserts/WhatsApp Image 2023-10-07 at 9.38.04 PM.jpeg"

const About = () => {
    return ( 
      <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />
        </div>
      </section>  
      
    )
}
 
export default About