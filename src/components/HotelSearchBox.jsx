import React from 'react'
import './HotelSearchBox.css';
import { FaRegUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

function HotelSearchBox() {
  return (
    <div className="hotel-search-box">
    <form >
      <input type="" id="check-in" name="check-in" placeholder="      Feb 15, 2024     1 night    Feb 16, 2024" class="custom-input"/><MdDateRange className="custom-fa-date"/>
      <input type="" id="check-out" name="check-out" placeholder="     1 Room, 1 Adult, 0 childern" /><FaRegUser className="custom-fa-user"  />
      <input type="" id="rooms" name="rooms"  placeholder="     Special Code" /><FaRegBookmark className="custom-fa-code"/>
      <button type="submit">Search</button>
    </form>
  </div>
  )
}

export default HotelSearchBox