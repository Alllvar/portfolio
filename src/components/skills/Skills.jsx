// src/components/Skills.jsx
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
    { icon: <img src={htmlLogo} alt="JavaScript" className="skills__img-icon" />, name: 'HTML 5' },
    { icon: <img src={jsLogo} alt="JavaScript" className="skills__img-icon" />, name: 'JavaScript (ES6+)' },
    { icon: <img src={tsLogo} alt="TypeScript" className="skills__img-icon" />, name: 'TypeScript' },
    { icon: <SiReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
    { icon: <img src={reduxSaga} alt="Redux-Saga" className="skills__img-icon-saga" />, name: 'Redux-Saga' },
    { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },

    { icon: <img src={antDesign} alt="Ant Design" className="skills__img-icon" />, name: 'Ant Design' },
    { icon: <SiStyledcomponents />, name: 'Styled Components', color: '#DB7093' },
    { icon: <SiBootstrap />, name: 'Bootstrap', color: '#563d7c' },

    { icon: <SiGit />, name: 'Git', color: '#F05032' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <SiJira />, name: 'Jira (Agile/Scrum)', color: '#0052CC' },
    { icon: <SiAsana />, name: 'Asana (Agile/Scrum)', color: '#FC636B' },
    { icon: <SiTrello />, name: 'Trello', color: '#0079BF' },
    { icon: <img src={figma} alt="Figma" className="skills__img-icon" />, name: 'Figma' },

    { icon: <SiJest />, name: 'Jest', color: '#C21325' },
    { icon: <SiTestinglibrary />, name: 'React Testing Library', color: '#E33332' },

    { icon: <SiSocketdotio />, name: 'WebSockets (Socket.io)', color: '#010101' },
    { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
    { icon: <img src={gitlab} alt="GitLab" className="skills__img-icon" />, name: 'GitLab' },
    { icon: <img src={bitbucket} alt="Bitbucket" className="skills__img-icon" />, name: 'Bitbucket' },
];

const rowCounts = [7, 8, 7];

const Skills = () => {
    let start = 0;
    return (
        <section id="skills" className="skills">
            <div className="skills__content container">
                <div className="skills__circle">
                    {rowCounts.map((count, row) => {
                        const slice = skills.slice(start, start + count);
                        start += count;
                        return (
                            <div key={row} className="skills__row">
                                {slice.map(s => (
                                    <div
                                        key={s.name}
                                        className="skills__icon"
                                        title={s.name}
                                        style={{ color: s.color }}
                                    >
                                        {s.icon}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
