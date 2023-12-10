import React from "react";
import "../home/home.css"
import Me from "../../Asserts/profile2.jpeg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from "./ScrollDown";


const Home = () => {
    return (  
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt=""  />
                <h1 className="home__name">Anele Maseko</h1>
                <span className="home__education">I am a Front-End developer</span>

                <HeaderSocials/>
                <ScrollDown />

                <a href="#Contact" className="btn">Hire Me</a>
            </div>
        </section>
    )
}
 
export default Home;