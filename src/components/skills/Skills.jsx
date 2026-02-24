import React from "react";
import "./skills.scss";
import htmlLogo from "../../assets/html5.svg";
import jsLogo from "../../assets/js.png";
import tsLogo from "../../assets/ts.png";
import reduxSaga from "../../assets/redux-saga.png";
import antDesign from "../../assets/ant-design.svg";
import figma from "../../assets/figma.png";
import gitlab from "../../assets/gitlab.png";
import bitbucket from "../../assets/bitbucket.png";
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiStyledcomponents,
  SiBootstrap,
  SiGit,
  SiPostman,
  SiJira,
  SiAsana,
  SiTrello,
  SiJest,
  SiTestinglibrary,
  SiSocketdotio,
  SiGithub,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Core Frontend",
    description: "Production-ready UI work with modern React patterns, typed code, and scalable state management.",
    items: [
      { icon: <img src={htmlLogo} alt="HTML5" />, name: "HTML 5", color: "#ff8a3d" },
      { icon: <img src={jsLogo} alt="JavaScript" />, name: "JavaScript (ES6+)", color: "#ffe169" },
      { icon: <img src={tsLogo} alt="TypeScript" />, name: "TypeScript", color: "#3c8dff" },
      { icon: <SiReact />, name: "React", color: "#61DAFB" },
      { icon: <SiRedux />, name: "Redux", color: "#9f7aea" },
      { icon: <img src={reduxSaga} alt="Redux-Saga" />, name: "Redux-Saga", color: "#a8ffb0" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
    ],
  },
  {
    title: "UI Engineering",
    description: "Component systems, styling libraries, and design-to-code execution with an eye on consistency.",
    items: [
      { icon: <img src={antDesign} alt="Ant Design" />, name: "Ant Design", color: "#64d7ff" },
      { icon: <SiStyledcomponents />, name: "Styled Components", color: "#DB7093" },
      { icon: <SiBootstrap />, name: "Bootstrap", color: "#8a63ff" },
      { icon: <img src={figma} alt="Figma" />, name: "Figma", color: "#ffad54" },
    ],
  },
  {
    title: "Quality & Integrations",
    description: "Testing, APIs, and real-time features that support reliable shipping and smooth user flows.",
    items: [
      { icon: <SiJest />, name: "Jest", color: "#C21325" },
      { icon: <SiTestinglibrary />, name: "React Testing Library", color: "#E33332" },
      { icon: <SiSocketdotio />, name: "WebSockets (Socket.io)", color: "#ffffff" },
      { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    ],
  },
  {
    title: "Workflow & Collaboration",
    description: "Version control and agile tooling used in distributed teams and product delivery cycles.",
    items: [
      { icon: <SiGit />, name: "Git", color: "#F05032" },
      { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
      { icon: <img src={gitlab} alt="GitLab" />, name: "GitLab", color: "#ff9b59" },
      { icon: <img src={bitbucket} alt="Bitbucket" />, name: "Bitbucket", color: "#4f8dff" },
      { icon: <SiJira />, name: "Jira (Agile/Scrum)", color: "#4f8dff" },
      { icon: <SiAsana />, name: "Asana (Agile/Scrum)", color: "#FC636B" },
      { icon: <SiTrello />, name: "Trello", color: "#2db2ff" },
    ],
  },
];

const totalSkills = skillGroups.reduce((sum, group) => sum + group.items.length, 0);

const Skills = () => (
  <section id="experience" className="skills">
    <div className="skills__bg skills__bg--one" aria-hidden="true" />
    <div className="skills__bg skills__bg--two" aria-hidden="true" />

    <h5>Core stack & workflow</h5>
    <h2>My Experience</h2>
    <p className="skills__lead container">
      Tools and technologies I use to build production interfaces: from component-driven frontend architecture
      to testing, integrations, and team delivery workflows.
    </p>

    <div className="skills__content container">
      <div className="skills__stats" aria-label="experience overview">
        <div className="skills__stat">
          <strong>{totalSkills}+</strong>
          <span>Tools & libraries</span>
        </div>
        <div className="skills__stat">
          <strong>{skillGroups.length}</strong>
          <span>Skill clusters</span>
        </div>
        <div className="skills__stat">
          <strong>React / Next</strong>
          <span>Core product stack</span>
        </div>
      </div>

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills__group">
            <div className="skills__group-head">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skills__grid">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="skills__item"
                  style={{ "--skill-color": skill.color || "#64d7ff" }}
                  title={skill.name}
                >
                  <div className="skills__icon" aria-hidden="true">
                    {skill.icon}
                  </div>
                  <span className="skills__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
