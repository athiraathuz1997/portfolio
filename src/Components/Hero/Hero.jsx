
import './Hero.css'
import profile_img from '../../Portfolio_React_Assets/assets/AthiraProfile.svg'

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id ='home' className='hero'>
        <img src={profile_img} alt="" srcset="" />
        <h1><span>I'm Athira B,</span>UI developer</h1>
        <p>Dedicated UI developer with one year of experience, specializing in designing, developing, and implementing user interfaces.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero