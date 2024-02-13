import React from "react";
import "./";
import "./App.css"
import Sidebar from './components/sidebar/sidebar';
import Index  from "./components/home/Index";

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
        <Index />
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


