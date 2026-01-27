import React from 'react';
import './skills.scss';
import htmlLogo from '../../assets/html5.svg';
import jsLogo from '../../assets/js.png';
import tsLogo from '../../assets/ts.png';
import reduxSaga from '../../assets/redux-saga.png';
import antDesign from '../../assets/ant-design.svg';
import figma from '../../assets/figma.png';
import gitlab from '../../assets/gitlab.png';
import bitbucket from '../../assets/bitbucket.png';
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
} from 'react-icons/si';

const skills = [
    { icon: <img src={htmlLogo} alt="HTML5" />, name: 'HTML 5' },
    { icon: <img src={jsLogo} alt="JavaScript" />, name: 'JavaScript (ES6+)' },
    { icon: <img src={tsLogo} alt="TypeScript" />, name: 'TypeScript' },
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
    { icon: <img src={reduxSaga} alt="Redux-Saga" />, name: 'Redux-Saga' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
    { icon: <img src={antDesign} alt="Ant Design" />, name: 'Ant Design' },
    { icon: <SiStyledcomponents />, name: 'Styled Components', color: '#DB7093' },
    { icon: <SiBootstrap />, name: 'Bootstrap', color: '#563d7c' },
    { icon: <SiGit />, name: 'Git', color: '#F05032' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <SiJira />, name: 'Jira (Agile/Scrum)', color: '#0052CC' },
    { icon: <SiAsana />, name: 'Asana (Agile/Scrum)', color: '#FC636B' },
    { icon: <SiTrello />, name: 'Trello', color: '#0079BF' },
    { icon: <img src={figma} alt="Figma" />, name: 'Figma' },
    { icon: <SiJest />, name: 'Jest', color: '#C21325' },
    { icon: <SiTestinglibrary />, name: 'React Testing Library', color: '#E33332' },
    { icon: <SiSocketdotio />, name: 'WebSockets (Socket.io)', color: '#010101' },
    { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
    { icon: <img src={gitlab} alt="GitLab" />, name: 'GitLab' },
    { icon: <img src={bitbucket} alt="Bitbucket" />, name: 'Bitbucket' },
];

const Skills = () => (
    <section id="experience" className="skills">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="skills__content container">
            <div className="skills__grid">
                {skills.map((s) => (
                    <div key={s.name} className="skills__icon" style={{ color: s.color || '#fff' }}>
                        {s.icon}
                        <span className="skills__tooltip">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
