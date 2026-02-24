import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="header__glow header__glow--one" aria-hidden="true" />
      <div className="header__glow header__glow--two" aria-hidden="true" />

      <div className="container header__container">
        <div className="header__intro">
          <div className="subtitle">Frontend Engineer • React / Next.js</div>
          <h1 className="title">Viktor Martyniuk</h1>
          <p className="text-light tagline">
            I build polished web interfaces for fintech, SaaS, and e-commerce products with a focus on
            performance, clarity, and conversion-friendly UX.
          </p>

          <div className="header__chips" aria-label="focus areas">
            <span>Product UI</span>
            <span>Design systems</span>
            <span>Data-heavy dashboards</span>
            <span>Responsive UX</span>
          </div>

          <CTA />
        </div>

        <HeaderSocials />

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
