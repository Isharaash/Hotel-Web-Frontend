import React, { useState } from 'react';
import './Destinations.css'; 
import image1 from '../assets/4.jpg';
import image2 from '../assets/5.jpeg';
import image3 from '../assets/6.jpg';
import image4 from '../assets/7.jpg';
import DestinationsCard from './DestinationsCard';

const destinations = [
  { name: 'Cinnamon Life', image: image1 },
  { name: 'Cinnamon Grand Colombo', image: image2 },
  { name: 'Cinnamon Lakeside Colombo', image: image3 },
  { name: 'Cinnamon Red Colombo', image: image4 },
  
];

function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]); // Initialize with the first destination

  const handleDestinationChange = (event) => {
    const selectedName = event.target.value;
    const selected = destinations.find(dest => dest.name === selectedName);
    setSelectedDestination(selected);
  };

  return (
    <div>
      <DestinationsCard/>
    <div className="destinations-container">
        <h3>Our Destinations</h3>
      <select className="destination-select" onChange={handleDestinationChange} value={selectedDestination.name}>
        {destinations.map(dest => (
          <option key={dest.name} value={dest.name}>{dest.name}</option>
        ))}
      </select>
      <div className="destination-image">
        <img src={selectedDestination.image} alt={selectedDestination.name} />
      </div>
    </div>
  
    </div>
  )
}

export default Destinations;
