import React from "react";
import "./services.css"
import Image1 from "../../Asserts/UIUX.jpg";
import Image2 from "../../Asserts/web-development.jpg";
import Image3 from "../../Asserts/photography.jpeg";

const data = [
    {
       id:1,
       image:Image1,
       title: "UI/UX design",
       description:
       "Visual design and appearance of a product, including buttons, menus, and icons.",
    },
    {
       id:2,
       image:Image2,
       title: "Web Development",
       description:
       "Developing responsive and well structured websites.",
    },
    {
       id:3,
       image:Image3,
       title: "Photography",
       description:
       "Good Quality Pictures with well Angles captures.",
    },
]

const Services = () => {
    return ( 
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) =>{
                    return(
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services_title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                    )
                })}
            </div>
        </section>
     )
}
 
export default Services ;