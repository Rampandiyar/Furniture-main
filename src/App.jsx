import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Car from "./components/Car";
import Car2 from "./components/Car2";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="cards">
        <Cards />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="car">
        <Car />
      </section>
      <section id="car2">
        <Car2 />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}


export default App;
