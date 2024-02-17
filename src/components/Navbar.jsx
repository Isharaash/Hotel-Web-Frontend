import React from 'react'
import './Navbar.css';
import MainNavBar from './MainNavBar';
import Image from './Image';
import HotelSearchBox from './HotelSearchBox';


function Navbar() {
  return (
    <div>
      <MainNavBar/>
      
 <nav className="navbar">
    <ul>
    <li><a href="/">About<span class="arrow">▼</span></a>
      
    </li>
      <li><a href="/">Root & Suites <span class="arrow">▼</span></a></li>
      <li><a href="/">Dining <span class="arrow">▼</span></a></li>
      <li><a href="/">Experoence<span class="arrow">▼</span></a></li>
      <li><a href="/">Events<span class="arrow">▼</span></a></li>
      <li><a href="/">Gallery</a></li>
      <li><a href="/">Offers</a></li>
      <li><a href="/">More <span class="arrow">▼</span></a></li>
   
    <button className="nav-button">Find a hotel</button>
    </ul>
    <Image/>
    <HotelSearchBox/>
  </nav>

 
    </div>
  )
}

export default Navbar