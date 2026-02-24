import React from "react";
import "./portfolio.css";
import { FiArrowUpRight } from "react-icons/fi";
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
    title: "Influencer Hero",
    category: "Creator Management Platform",
    description:
      "Product interface for influencer agencies to discover creators, organize outreach, and manage campaign workflows in one place.",
    stack: ["Product UI", "Data-heavy flows", "Agency tooling"],
    link: "https://app.influencer-hero.com/influencer_finder",
  },
  {
    id: 2,
    image: IMG2,
    title: "BuyBank",
    category: "Cryptocurrency Exchange Platform",
    description:
      "Conversion-focused exchange experience with quick pair selection, trust cues, and a streamlined path from rate check to transaction.",
    stack: ["Fintech UI", "Forms", "Conversion UX"],
    link: "https://buybank.io/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Blib",
    category: "Bulk Ads Upload Tool",
    description:
      "Internal tool for batch creating and uploading hundreds of Facebook and Instagram ads, reducing repetitive work for media teams.",
    stack: ["Automation UX", "Internal tools", "Meta Ads"],
    link: "https://alllvar.github.io/blib/",
  },
  {
    id: 4,
    image: IMG4,
    title: "BabyKroha",
    category: "E-commerce Store",
    description:
      "Online storefront for children's clothing with product-first browsing and a shopping flow optimized for clarity and trust.",
    stack: ["E-commerce", "Catalog UI", "Retail UX"],
    link: "https://babykroha.ua/",
  },
  {
    id: 5,
    image: IMG5,
    title: "CoinPointr",
    category: "Crypto Exchange Service",
    description:
      "Customer-facing exchange product with clear transaction steps, rate visibility, and a lightweight onboarding experience.",
    stack: ["Crypto", "User flows", "Responsive UI"],
    link: "https://www.coinpointr.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Swapenco",
    category: "Crypto Exchange Website",
    description:
      "Localized exchange interface built around fast input interactions and a straightforward swap flow for everyday users.",
    stack: ["Localization", "Exchange UI", "Form UX"],
    link: "https://www.swapenco.com.ua/uk/?typeForm=exchange&from=MONOBUAH&to=USDTTRC20",
  },
  {
    id: 7,
    image: IMG7,
    title: "Bulldog Exchange",
    category: "Digital Asset Exchange Platform",
    description:
      "Brand-forward exchange experience focused on speed, reliability, and easy navigation through key transaction scenarios.",
    stack: ["Brand UI", "Fintech", "Trust-focused design"],
    link: "https://www.bulldog.exchange/en/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Barskiy Dvor Obmen",
    category: "Cryptocurrency Exchange Website",
    description:
      "Multi-language exchange website with a simple rate-driven interface and quick access to core operations.",
    stack: ["Multi-language", "Exchange UX", "Landing + flow"],
    link: "https://www.barskiydvorobmen.com/en/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Drakkar Exchange",
    category: "Secure Exchange Service",
    description:
      "Service website centered on secure and fast exchanges, with polished brand presentation and conversion-oriented structure.",
    stack: ["Fintech marketing", "UI polish", "Conversion flow"],
    link: "https://www.drakkar.exchange/en/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Valuta",
    category: "Exchange & Transfer Service",
    description:
      "Currency exchange and transfer interface with clear messaging, accessible navigation, and action-first page layouts.",
    stack: ["Service UI", "Messaging", "Responsive layouts"],
    link: "https://www.valuta.in.ua/en/",
  },
  {
    id: 11,
    image: IMG11,
    title: "MW Exchange",
    category: "Fast & Secure Crypto Exchange",
    description:
      "Crypto exchange experience designed for confidence and speed, featuring clean structure and direct transactional UX.",
    stack: ["Crypto UX", "Conversion", "Information hierarchy"],
    link: "https://www.mw.exchange/uk/",
  },
  {
    id: 12,
    image: IMG12,
    title: "eBTCpro",
    category: "Cryptocurrency Exchanger",
    description:
      "Exchange platform UI for fast operations, clear rate communication, and a friction-reduced customer journey.",
    stack: ["Fintech", "Transaction flow", "UI consistency"],
    link: "https://www.ebtc.pro/en/",
  },
  {
    id: 13,
    image: IMG13,
    title: "HeyVista",
    category: "AI Agents Product Website",
    description:
      "Modern product/marketing experience for AI agents with feature storytelling, strong visual hierarchy, and clean CTA flow.",
    stack: ["AI product", "Marketing site", "Visual hierarchy"],
    link: "https://www.heyvista.ai/",
  },
  {
    id: 14,
    image: IMG14,
    title: "MerchantStack",
    category: "Merchant Operations Platform",
    description:
      "Web application interface for merchant-side workflows and operational tasks, focused on usability and team productivity.",
    stack: ["Dashboard", "Operations", "Product workflows"],
    link: "https://app.merchantstack.net",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Selected Work</h5>
      <h2>Projects & Product Interfaces</h2>
      <p className="portfolio__lead container">
        A mix of production fintech products, internal tools, e-commerce solutions, and modern SaaS interfaces.
        I focus on clean structure, fast interactions, and conversion-friendly UX.
      </p>

      <div className="container portfolio__container">
        {portfolioItems.map(({ id, image, title, category, description, stack, link }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <span className="portfolio__item-index">{String(id).padStart(2, "0")}</span>
              <img src={image} alt={`${title} preview`} />
            </div>
            <div className="portfolio__item-content">
              <p className="portfolio__item-category">{category}</p>
              <h3>{title}</h3>
              <p className="portfolio__item-description">{description}</p>
              <ul className="portfolio__item-tags" aria-label={`${title} tags`}>
                {stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio__item-cta">
              <a className="btn btn-primary" href={link} target="_blank" rel="noreferrer">
                Open website <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
