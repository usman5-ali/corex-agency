import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Portfolio from "../../pages/Portfolio";
import Testimonial from "../../pages/Testimonials";
import Contact from "../../pages/Contact";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
       <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Testimonials" element={<Testimonial />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
};

export default Router;
