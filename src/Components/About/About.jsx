import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <p>
            Hi, I'm Tanmay Raut, an aspiring Java developer with a keen interest in web development and blockchain technology.
            As an Information Technology student, I am passionate about exploring the depths of computer science and 
            continuously expanding my knowledge in this ever-evolving field.
          </p>

          <div className="tab-title">
            <p
              className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
              onClick={() => opentab('education')}
            >
              Education
            </p>
            <p
              className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
              onClick={() => opentab('experience')}
            >
              Experience
            </p>
          </div>

          <div className="tab-contents">
            {activeTab === 'education' && (
              <div className="tab-contents active-tab" id="education">
                <ul>
                  <li>
                    <span>2022 - Present</span><br />
                    Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded<br />
                    B-Tech in Information Technology<br />
                    CGPA - 9.08 (First year)
                  </li>
                  <li>
                    <span>2020 - 2022</span><br />
                    Shri Datta Vidya Mandir, Buttibori, Nagpur<br />
                    12th with 88.4%
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="tab-contents active-tab" id="experience">
                <ul>
                  <li>
                    <span>Technical Head</span><br />Information Technology Student Association (August 2024)
                  </li>
                  <li>
                    <span>Java Intern</span><br />Oasis Infobyte (September 2023 - October 2023)
                  </li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achieve">
          <h1>500+</h1>
          <p>Questions on Leetcode</p>
        </div>
        <div className="about-achieve">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
