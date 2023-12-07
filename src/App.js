import React from "react";
import "./";
import "./App.css"
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import About from "./components/about/about";
import Services from "./components/services/services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";

import Contact from "./components/contact/contact";


const App = () => {
  return ( 
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    
    
    </>
   )
}
 
export default App;


