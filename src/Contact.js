import React from 'react'
import './contact.css';
import contact from './images/contact.jpg';
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";



const Contact = () => {
  return (
    <div className='contact'>
      <section>
        <img src={contact} alt="contactbar" />
        <div className="back">

        </div>
        <div className="contact-content">
         <div className="contact">
         <h3>
            Contact !
          </h3>
          <p>676767-4555</p>
          <p><a href="/" className='text-white ' >bar777@official.com</a></p>
        </div>
        <div className="email">
          <p>
Join the Club & Get Updates on Special Events</p>
<label htmlFor="email">Email <span>*</span></label>
<input type="email" className='' name="email" id="email" />
<button type='submit' className='btn btn-outline-warning'>Subscribe</button>
        </div>
        <div className="social mt-33">
          <h5>Follow us!</h5>
          <span><BiLogoFacebookSquare/></span>
          <span><BiLogoInstagram/></span>

          
        </div>
        </div>
      </section>
    </div>
  )
}

export default Contact