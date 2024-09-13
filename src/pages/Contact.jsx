import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  return (
    <>
      <ToastContainer autoClose={3000}  />
      <Header />
      <Contact />
    </>
  );
};

export default ContactPage;
