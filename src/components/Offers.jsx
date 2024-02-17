import React from 'react';

import './Offers.css';
import image1 from'../assets/14.png';
 import image2 from'../assets/15.png';
 import image3 from'../assets/16.png';


function Offers({ title, image, description }) {
  return (
    <div>

        <h3 className='offer'>Offers</h3>
            <div className="cards-row">
                
     
    <div className="card">
      <img src={image1} alt={title} className="card-image" />
      <div className="card-content">
        <p className='card-name'>Rooms & Suites</p>
        <h2 className="card-title">Shangri–La Circle Exclusive Member Rate with Breakfast</h2>
        <p className="card-description">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
        <p className='card-price'>From <strong>LKR 56,298.60 </strong>Average Per Night</p>
        <button className="card-button">View Details</button>
      </div>
    </div>

    <div className="card">
      <img src={image2} alt={title} className="card-image" />
      <div className="card-content">
      <p className='card-name'>Rooms & Suites</p>
        <h2 className="card-title">Shangri–La Circle Exclusive Member Rate
</h2>
<p className="card-description">Exclusive Member Rate for Shangri-La Circle member.</p>
        <p className='card-price'>From <strong>LKR 50,043.20 </strong>Average Per Night</p>
        <button className="card-button">View Details</button>
      </div>
    </div>

    <div className="card">
      <img src={image3} alt={title} className="card-image" />
      <div className="card-content">
      <p className='card-name'>Dining</p>
      <p className='card-date'>03 Jan 2024 - 31 Dec 2024</p>
        <h2 className="card-title3">Weekend Brunch at Central</h2>
        <p className="card-description-3">A global gastronomic journey awaits you with our Weekend brunch at Central.</p>
        <button className="card-button-3">View Details</button>
      </div>
     
    </div>
    
    </div>
    <p className='View-all'>View All</p>
    </div>

  );
}

export default Offers;

