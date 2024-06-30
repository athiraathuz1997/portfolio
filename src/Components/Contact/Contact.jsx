import React from 'react'
import './Contact.css'
import theme_pattern from '../../Portfolio_React_Assets/assets/theme_pattern.svg'
import mail_icon from '../../Portfolio_React_Assets/assets/mail_icon.svg'
import location_icon from '../../Portfolio_React_Assets/assets/location_icon.svg'
import call_icon from '../../Portfolio_React_Assets/assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
    
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9fa1405b-a78a-49b4-9b93-afe8fa9bb81b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
      if(data.success){
        alert(data.message);
      }
    
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" srcset="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work onYou can contact anytime.</p>
                    <div className="contact-details">   
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" srcset="" /><p>greatstackdev@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" srcset="" /><p>+772-825-524</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" srcset="" /><p>CA, United</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
                <span>{result}</span>
                
            </div>
        </div>
    )
}

export default Contact