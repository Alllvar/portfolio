import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/viktor-martyniuk-b56998214/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/alllvar" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://t.me/villentis" target="_blank" rel="noreferrer" aria-label="Telegram">
        <SiTelegram />
      </a>
      <a href="mailto:tkvbifua@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
        <FiMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
