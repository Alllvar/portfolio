// src/components/nav/Nav.jsx
import React, { useEffect, useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (!sections.length) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const firstSectionTop = sections[0].offsetTop - 100;

      if (scrollY < firstSectionTop) {
        setActiveNav("#");
        return;
      }

      for (const section of sections) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveNav(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <a aria-label="Home" href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        aria-label="About"
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        aria-label="Experience"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        aria-label="Portfolio"
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        aria-label="Contact"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
