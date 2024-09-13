import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";
import About from "../components/About";
import Solution from "../components/Solution";
import Plan from "../components/Plan";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </>
  );
};

export default HomePage;
