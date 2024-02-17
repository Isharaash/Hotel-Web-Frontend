import React from 'react';
import './Experience.css';
import image1 from "../assets/8.jpg";
import image2 from "../assets/9.png";
import image3 from "../assets/10.png";
import image4 from "../assets/11.png";
import image5 from "../assets/12.png";
import image6 from "../assets/13.png";

function Experience() {
  return (
    <div className='page-text'>
    <h3>Experience Something New</h3>
    <p>Close to home or across the world. Hilton is there for you with memorable offers and experiences. Check out what's new.</p>
    <div className="gallery-container">
 
      <div className="gallery-row">
        <div className="gallery-item">
          <img src={image1} alt="1" />
          <div className="image-title">Join Hilton Honors & Get Up to 3,000 Points</div>
        </div>
        <div className="gallery-item">
          <img src={image2} alt="2" />
          <div className="image-title">Advance Purchase Discount – save up to 17%</div>
        </div>
        <div className="gallery-item">
          <img src={image3} alt="3" />
          <div className="image-title">Multiply Your Points</div>
        </div>
      </div>
      <div className="gallery-row">
        <div className="gallery-item">
          <img src={image4} alt="4" />
          <div className="image-title">Free Bonus Points at new hotels</div>
        </div>
        <div className="gallery-item">
          <img src={image5} alt="5" />
          <div className="image-title">Park & Stay</div>
        </div>
        <div className="gallery-item">
          <img src={image6} alt="6" />
          <div className="image-title">Experience the Stay</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Experience;
