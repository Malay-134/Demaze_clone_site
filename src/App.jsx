import "./App.css";
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
      <Header />
      <Home />
      <Services />
      <About />
      <Solution />
      <Plan/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
