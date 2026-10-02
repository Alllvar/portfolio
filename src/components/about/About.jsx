import React from "react";
import "./about.css";
import ME from "../../assets/ME.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Companies</h5>
              <small>5 Companies</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            Frontend Developer with 4 years of hands-on experience building and maintaining scalable, responsive web
            applications using React, Redux, Next.js, JavaScript, and Material UI. Proven ability to take ownership of
            complex features, improve application architecture, and ship high-quality code in fast-paced environments.
          </p>
          <p>
            Today I am more than a frontend developer. Working side by side with AI agents such as Claude Code and
            Codex, I can take a web product of any kind from idea to production: frontend, backend, integrations,
            tests, and deployment. I set the direction, break the work down, and review every result, so the speed of
            agents comes with the quality of an experienced engineer.
          </p>
          <p>
            Looking for a fully remote opportunity with a dynamic international team where I can grow and make
            meaningful impact.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
