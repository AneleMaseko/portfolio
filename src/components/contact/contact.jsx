import React from "react";
import "../contact/contact.css"


const Contact = () => {
    return ( 
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">let's talk about everything!</h3>
                    <p className="contact__details">Don't liike forms? send me an email. 👋🏿</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"  placeholder="insert your name" />
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input"
                              placeholder="insert your email" />
                        </div>
                    </div>
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                              placeholder="insert your subject" />
                        </div>
                        <div className="contact__form-div">
                           <textarea
                            name="" 
                            id="" 
                            cols="30" 
                            rows="10" 
                           classsName="contact__form-input" 
                           placeholder="Write your message">
                           </textarea>
                        </div>

                        <button className="btn">Send Message</button>     
                </form>
            </div>
        </section>
     ) 
}
 
export default Contact ;