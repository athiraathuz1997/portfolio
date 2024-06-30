
import './Hero.css'
import profile_img from '../../Portfolio_React_Assets/assets/profile_img.svg'

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id ='home' className='hero'>
        <img src={profile_img} alt="" srcset="" />
        <h1><span>I'm Alex B,</span> frontend developer bases in USA</h1>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero