 import React from "react";
import '../about/about.css';
import Image from "../../Asserts/about.jpeg";
import AboutBox from "../about/AboutBox";
import Cv from "../../Asserts/cv.pdf"


const About = () => {
    return ( 
      <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />
            <div className="about__data grid">
              <div className="about__info">
                <p className="abot__description">
                  I am Anele Maseko, web developer from South Africa,
                   Gauteng. I have rich experience in web site design and building and customization.
                </p>
                <a href={Cv} className="btn">Download CV</a>
              </div>

              <div className="about__skills grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Development</h3>
                    <span className="skills__number ">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage development"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">UI/UX design</h3>
                    <span className="skills__number ">80%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage ui__design"></span>
                  </div>
                </div>

                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photography</h3>
                    <span className="skills__number">60%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage photography"></span>
                  </div>
                </div>


              </div>
            </div>
        </div>
        <AboutBox/>
      </section>  
      
    )
}
 
export default About