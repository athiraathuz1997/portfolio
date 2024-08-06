import './About.css'
import React from 'react'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
import profile_img from '../../Portfolio_React_Assets/assets/AthiraProfile.svg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a passionate UI developer with one year of experience, I excel in designing and implementing user-friendly and visually appealing interfaces. </p>
                        <p>My expertise spans across front-end technologies including HTML, CSS, Bootstrap, JavaScript, UI/UX, React JS, Git, and Responsive Design.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Bootstrap</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About