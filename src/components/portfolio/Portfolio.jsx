import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/influencer_hero1.png";
import IMG2 from "../../assets/buybunk1.png";
import IMG3 from "../../assets/blib.png";
import IMG4 from "../../assets/babykroha.png";
import IMG5 from "../../assets/coinpointr.png";
import IMG6 from "../../assets/swapenco.png";
import IMG7 from "../../assets/buldog.png";
import IMG8 from "../../assets/barskiydvorobmen.png";
import IMG9 from "../../assets/drakkar.png";
import IMG10 from "../../assets/valuta.png";
import IMG11 from "../../assets/exchange.png";
import IMG12 from "../../assets/ebtc.png";
import IMG13 from "../../assets/heyvista.png";
import IMG14 from "../../assets/merchantstack.png";

const portfolioItems = [
  {
    id: 1,
    image: IMG1,
    title: "Project: Creator Management Platform for Influencer Agencies",
    link: "https://app.influencer-hero.com/influencer_finder",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project: Cryptocurrency Exchange Platform",
    link: "https://buybank.io/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Blip: Batch Upload 100s of Facebook & Instagram Ads",
    link: "https://alllvar.github.io/blib/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Project: Online Children's Clothing Store",
    link: "https://babykroha.ua/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Project: Crypto Exchange",
    link: "https://www.coinpointr.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project: Crypto Exchange",
    link: "https://www.swapenco.com.ua/uk/?typeForm=exchange&from=MONOBUAH&to=USDTTRC20",
  },
  {
    id: 7,
    image: IMG7,
    title: "Project: Platform for fast and reliable exchange",
    link: "https://www.bulldog.exchange/en/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Project: Cryptocurrency exchange",
    link: "https://www.barskiydvorobmen.com/en/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Project: Reliable service for fast and secure exchanges",
    link: "https://www.drakkar.exchange/en/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Project: Exchange no problem. Translation without borders",
    link: "https://www.valuta.in.ua/en/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Project: Fast and Secure Crypto Exchange",
    link: "https://www.mw.exchange/uk/",
  },
  {
    id: 12,
    image: IMG12,
    title: "Project: Your reliable cryptocurrency exchanger eBTCpro",
    link: "https://www.ebtc.pro/en/",
  },
  {
    id: 13,
    image: IMG13,
    title: "Project: AI agents",
    link: "https://www.heyvista.ai/",
  },
  {
    id: 14,
    image: IMG14,
    title: "Project by CSI Works",
    link: "https://app.merchantstack.net",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map(({ id, image, title, link }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a className="btn btn-primary" href={link} target="_blank" rel="noreferrer">
                Open website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
