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
          <div className="subtitle">Product Engineer · React / Next.js · AI Agents</div>
          <h1 className="title">Viktor Martyniuk</h1>
          <p className="text-light tagline">
            I design, build, and ship complete web products for fintech, SaaS, and e-commerce. Strong frontend
            engineering paired with AI coding agents like Claude Code and Codex lets me deliver fast without
            cutting corners on quality.
          </p>

          <div className="header__chips" aria-label="focus areas">
            <span>AI-assisted delivery</span>
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
