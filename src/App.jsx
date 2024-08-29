import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Plan from "./components/Plan";
import Services from "./components/Services";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}
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
}
export default App;
