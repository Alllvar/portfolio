import React, { useState } from "react";
import "./portfolio.css";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
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
import IMG15 from "../../assets/gou.png";
import IMG_CRM from "../../assets/influencer_crm.png";

const portfolioItems = [
  {
    image: IMG_CRM,
    title: "Influencer CRM",
    category: "Full-Stack MERN Application",
    description:
      "CRM for influencer marketing teams: creators, campaigns, and a drag-and-drop deal pipeline. Express + MongoDB API with JWT refresh token rotation, aggregation-based dashboard, OpenAPI docs, tests, Docker, and CI.",
    stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript"],
    link: "https://github.com/Alllvar/influencer-crm",
    linkLabel: "View code",
  },
  {
    image: IMG1,
    title: "Influencer Hero",
    category: "Creator Management Platform",
    description:
      "Product interface for influencer agencies to discover creators, organize outreach, and manage campaign workflows in one place.",
    stack: ["Product UI", "Data-heavy flows", "Agency tooling"],
    link: "https://app.influencer-hero.com/influencer_finder",
  },
  {
    image: IMG2,
    title: "BuyBank",
    category: "Cryptocurrency Exchange Platform",
    description:
      "Conversion-focused exchange experience with quick pair selection, trust cues, and a streamlined path from rate check to transaction.",
    stack: ["Fintech UI", "Forms", "Conversion UX"],
    link: "https://buybank.io/",
  },
  {
    image: IMG3,
    title: "Blib",
    category: "Bulk Ads Upload Tool",
    description:
      "Internal tool for batch creating and uploading hundreds of Facebook and Instagram ads, reducing repetitive work for media teams.",
    stack: ["Automation UX", "Internal tools", "Meta Ads"],
    link: "https://alllvar.github.io/blib/",
  },
  {
    image: IMG4,
    title: "BabyKroha",
    category: "E-commerce Store",
    description:
      "Online storefront for children's clothing with product-first browsing and a shopping flow optimized for clarity and trust.",
    stack: ["E-commerce", "Catalog UI", "Retail UX"],
    link: "https://babykroha.ua/",
  },
  {
    image: IMG5,
    title: "CoinPointr",
    category: "Crypto Exchange Service",
    description:
      "Customer-facing exchange product with clear transaction steps, rate visibility, and a lightweight onboarding experience.",
    stack: ["Crypto", "User flows", "Responsive UI"],
    link: "https://www.coinpointr.com/",
  },
  {
    image: IMG6,
    title: "Swapenco",
    category: "Crypto Exchange Website",
    description:
      "Localized exchange interface built around fast input interactions and a straightforward swap flow for everyday users.",
    stack: ["Localization", "Exchange UI", "Form UX"],
    link: "https://www.swapenco.com.ua/uk/?typeForm=exchange&from=MONOBUAH&to=USDTTRC20",
  },
  {
    image: IMG7,
    title: "Bulldog Exchange",
    category: "Digital Asset Exchange Platform",
    description:
      "Brand-forward exchange experience focused on speed, reliability, and easy navigation through key transaction scenarios.",
    stack: ["Brand UI", "Fintech", "Trust-focused design"],
    link: "https://www.bulldog.exchange/en/",
  },
  {
    image: IMG8,
    title: "Barskiy Dvor Obmen",
    category: "Cryptocurrency Exchange Website",
    description:
      "Multi-language exchange website with a simple rate-driven interface and quick access to core operations.",
    stack: ["Multi-language", "Exchange UX", "Landing + flow"],
    link: "https://www.barskiydvorobmen.com/en/",
  },
  {
    image: IMG9,
    title: "Drakkar Exchange",
    category: "Secure Exchange Service",
    description:
      "Service website centered on secure and fast exchanges, with polished brand presentation and conversion-oriented structure.",
    stack: ["Fintech marketing", "UI polish", "Conversion flow"],
    link: "https://www.drakkar.exchange/en/",
  },
  {
    image: IMG10,
    title: "Valuta",
    category: "Exchange & Transfer Service",
    description:
      "Currency exchange and transfer interface with clear messaging, accessible navigation, and action-first page layouts.",
    stack: ["Service UI", "Messaging", "Responsive layouts"],
    link: "https://www.valuta.in.ua/en/",
  },
  {
    image: IMG11,
    title: "MW Exchange",
    category: "Fast & Secure Crypto Exchange",
    description:
      "Crypto exchange experience designed for confidence and speed, featuring clean structure and direct transactional UX.",
    stack: ["Crypto UX", "Conversion", "Information hierarchy"],
    link: "https://www.mw.exchange/uk/",
  },
  {
    image: IMG12,
    title: "eBTCpro",
    category: "Cryptocurrency Exchanger",
    description:
      "Exchange platform UI for fast operations, clear rate communication, and a friction-reduced customer journey.",
    stack: ["Fintech", "Transaction flow", "UI consistency"],
    link: "https://www.ebtc.pro/en/",
  },
  {
    image: IMG13,
    title: "HeyVista",
    category: "AI Agents Product Website",
    description:
      "Modern product/marketing experience for AI agents with feature storytelling, strong visual hierarchy, and clean CTA flow.",
    stack: ["AI product", "Marketing site", "Visual hierarchy"],
    link: "https://www.heyvista.ai/",
  },
  {
    image: IMG14,
    title: "MerchantStack",
    category: "Merchant Operations Platform",
    description:
      "Web application interface for merchant-side workflows and operational tasks, focused on usability and team productivity.",
    stack: ["Dashboard", "Operations", "Product workflows"],
    link: "https://app.merchantstack.net",
  },
  {
    image: IMG15,
    title: "GOU",
    category: "Fashion E-commerce Store",
    description:
      "Online store of a Ukrainian clothing brand for women, men, and kids. Provided frontend maintenance and support: catalog and product page fixes, UI improvements, and a smoother shopping flow.",
    stack: ["E-commerce", "Maintenance & support", "Catalog UI"],
    link: "https://gou.in.ua/",
  },
];

const INITIAL_VISIBLE = 6;

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, INITIAL_VISIBLE);

  return (
    <section id="portfolio">
      <h5>Selected Work</h5>
      <h2>Projects & Product Interfaces</h2>
      <p className="portfolio__lead container">
        A full-stack MERN application plus a mix of production fintech products, internal tools, e-commerce
        solutions, and modern SaaS interfaces.
        I focus on clean structure, fast interactions, and conversion-friendly UX.
      </p>

      <div className="container portfolio__container">
        {visibleItems.map(({ image, title, category, description, stack, link, linkLabel }, index) => (
          <article key={title} className="portfolio__item">
            <div className="portfolio__item-image">
              <span className="portfolio__item-index">{String(index + 1).padStart(2, "0")}</span>
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
                {linkLabel || "Open website"} <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {portfolioItems.length > INITIAL_VISIBLE && (
        <div className="portfolio__more">
          <button type="button" className="btn" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "Show more"}
            {showAll ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
