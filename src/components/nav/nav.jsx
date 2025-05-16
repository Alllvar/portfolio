// src/components/nav/Nav.jsx
import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id]"));

        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            const firstSectionTop = sections[0].offsetTop - 100;

            // If we're above the very first section, go “home”
            if (scrollY < firstSectionTop) {
                setActiveNav("#");
                return;
            }

            // Otherwise find which section we’re in
            for (let section of sections) {
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
        handleScroll(); // highlight correctly on reload
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
                <AiOutlineUser />
            </a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
                <BiBook />
            </a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>
                <RiServiceLine />
            </a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
