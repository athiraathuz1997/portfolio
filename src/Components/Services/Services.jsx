import React from 'react'
import Services_Data from'../../Portfolio_React_Assets/assets/services_data'
import arrow_icon from '../../Portfolio_React_Assets/assets/arrow_icon.svg'
import './Services.css'
const Services = () => {
  return (
    <div>
        <div id ='services' className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src="{theme_pattern}" alt="" srcset="" />
            </div>
            <div className="services-container">
                {Services_Data.map((service,index)=>{
                    return <div key={index} className='sevices-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        {/* <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" srcset="" />
                        </div> */}
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Services