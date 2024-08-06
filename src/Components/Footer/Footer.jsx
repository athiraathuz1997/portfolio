import React from 'react'
import './Footer.css'
import footer_logo from '../../Portfolio_React_Assets/assets/footer_logo.svg'
import user_icon from '../../Portfolio_React_Assets/assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" srcset="" />
                <p>Dedicated UI developer with one year of experience, specializing in designing, developing, and implementing user interfaces.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" srcset="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Athira Balachandran. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer