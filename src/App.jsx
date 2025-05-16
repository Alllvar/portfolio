import React from "react";
import "./styles.scss";

import Header from "./components/header/Header";
import Nav from "./components/nav/nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
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
      {/*<Experience />*/}
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
