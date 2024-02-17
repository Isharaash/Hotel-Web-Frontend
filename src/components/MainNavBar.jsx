import React from 'react'
import './MainNavBar.css';
import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePhoneIphone } from "react-icons/md";

function MainNavBar() {
  return (
    <div>
 <nav className="mainnavbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
       
      </div>
      <ul className="nav-links">
        <li><a href="/"><FaRegUser className='icon-user' /> Sign In </a></li>
        <li><a href="/">Join Now</a></li>
        <li><a href="/">Find Reservations</a></li>
        <li><a href="/"><TbWorld size={10} /> English</a></li>
        <li><a href="/">LKR </a></li> <MdOutlinePhoneIphone className='icon-phone'/>
      </ul>
    </nav>


    </div>
  )
}

export default MainNavBar