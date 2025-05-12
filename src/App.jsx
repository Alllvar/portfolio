import React from "react";
import "./styles.scss";

import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

export default function App() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      {/*<Services />*/}
      <Portfolio />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
