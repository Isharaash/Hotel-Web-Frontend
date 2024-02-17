import React from 'react';
import './Footer.css'; 
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { FaAngleRight } from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <div className="about-section">
      <h3>About</h3>
      <ul>
        <li><a href="/">About Cinnamon Hotel & Resorts</a></li>
        <li><a href="/">Media & Aoclades</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">CSR & Sustainability</a></li>
        <li><a href="/">John keells Group</a></li>
        <li><a href="/">Cinnamon Air</a></li>
        <li><a href="/">Nature Trais</a></li>
        <li><a href="/">Cinnamon Box Office</a></li>
        <li><a href="/">Terms & Conditions</a></li>
        <li><a href="/">Privacy Statement</a></li>
      </ul>

    </div>

    <div className="Get-in-Touch-section">
      <h3>Get In Touch</h3>
      <ul>
        <li><a href="/">Know Sri Lank</a></li>
        <li><a href="/">Know Maldives</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">FAQs</a></li>

      </ul>

    </div>
    <div className="section">
      <h3>Section</h3>
      <ul>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Blog</a></li>
      </ul>

    </div>
    <div className="icons">
      <h3>Folow Us</h3>
      <FaFacebookF />
      <FaTwitter />
      <FaLinkedinIn />
      <ImInstagram />
      <TfiYoutube />

    </div>
    <div className="Email-section">
      <h3>Get Cinnamon in your inbox</h3>
      <div className="Email-input">
        <input type="email" id="check-in" name="check-in" placeholder="Email Address" />
        <button><FaAngleRight /></button>
      </div>
      
    <p className='policy-text'>By Checking this box, I consent to the processing of my Personal Data by<br/>
     Cinnamon for the purpose and within the Codition set out in this form and the <br/>
     cinnmon Data Protection Policy.</p>
     <input type="checkbox" id="consentCheckbox"/>
    </div>
     </div>
     
  );
}

export default Footer;
