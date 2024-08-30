import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import Solution from "../components/Solution";
import Plan from "../components/Plan";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Solution />
      <Plan />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
