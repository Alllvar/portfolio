import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/influencer_hero1.png";
import IMG2 from "../../assets/buybunk1.png";
import IMG3 from "../../assets/blib.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Project: Creator Management Platform for Influencer Agencies</h3>

          <div className="portfolio__item-cta">
            <div>
              <a href="https://app.influencer-hero.com/influencer_finder" className="btn btn-primary" target="_blank">
                Open website
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Project: Cryptocurrency Exchange Platform</h3>
          <div className="portfolio__item-cta">
            <a href="https://buybank.io/" className="btn btn-primary" target="_blank">
              Open website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Blip: Batch Upload 100s of Facebook &amp; Instagram Ads</h3>
          <div className="portfolio__item-cta">
            <a
                href="https://alllvar.github.io/blib/"
                className="btn btn-primary"
                target="_blank"
            >
              Open website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
