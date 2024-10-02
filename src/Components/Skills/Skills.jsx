import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import assets  from '../../assets/assets';

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skill-content">
                <div className="skill-frontend">
                    <h2>Frontend</h2>
                    <div className="skill-list">
                        <div className="skill"><img src={assets.html_logo} alt="" />HTML</div>
                        <div className="skill"><img src={assets.css} alt="" />CSS</div>
                        <div className="skill"><img src={assets.js} alt="" />Javascript</div>
                        <div className="skill"><img src={assets.react} alt="" />React</div>
                        <div className="skill"><img src={assets.tailwind} alt="" />Tailwind</div>
                        <div className="skill"><img src={assets.next} alt="" />Next Js</div>
                    </div>
                </div>
                <div className="skill-backend">
                    <h2>Backend</h2>
                    <div className="skill-list">
                        <div className="skill"><img src={assets.node} alt="" />Node Js</div>
                        <div className="skill"><img src={assets.mongo} alt="" />Mongo DB</div>
                        <div className="skill"><img src={assets.firebase_logo} alt="" />Firebase</div>
                        <div className="skill"><img src={assets.python} alt="" />Python</div>
                        <div className="skill"><img src={assets.sql} alt="" />MySQL</div>
                    </div>
                </div>
                <div className="skill-programming">
                    <h2>Programming</h2>
                    <div className="skill-list">
                        <div className="skill"><img src={assets.java_logo} alt="" />Java</div>
                        <div className="skill"><img src={assets.cpp} alt="" />C++</div>
                        <div className="skill"><img src={assets.python} alt="" />Python</div>
                        <div className="skill"><img src={assets.c_logo} alt="" />C</div>
                    </div>
                </div>
                <div className="skill-Others">
                    <h2>Others</h2>
                    <div className="skill-list">
                        <div className="skill"><img src={assets.git} alt="" />Git</div>
                        <div className="skill"><img src={assets.github} alt="" />Github</div>
                        <div className="skill"><img src={assets.postman} alt="" />Postman</div>
                        <div className="skill"><img src={assets.vs} alt="" />VS Code</div>
                        <div className="skill"><img src={assets.canva} alt="" />Canva</div>
                        <div className="skill"><img src={assets.ps} alt="" />Problem Solving</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills