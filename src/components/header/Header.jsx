import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          {/* Більш професійне звернення */}
          <h5 className="subtitle">Welcome to my Portfolio</h5>
          <h1 className="title">Viktor Martyniuk</h1>
          <h5 className="text-light tagline">
            Front-End Developer specializing in React & Next.js
          </h5>

          <CTA />
          <HeaderSocials />

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
  );
};

export default Header;
