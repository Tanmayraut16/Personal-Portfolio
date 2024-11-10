import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Tanmay Raut</span>, A developer based in India</h1>
      <p>Enthusiastic engineer starting a journey of crafting efficient solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
      <div className="hero-icons">
        <FaGithub className="hero-icon" />
        <FaLinkedin className="hero-icon" />
        <FaTwitter className="hero-icon" />
      </div>
    </div>
  )
}

export default Hero