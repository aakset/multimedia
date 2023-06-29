import React, { useState } from "react";
import "./renting.css";

function RentingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHours, setSelectedHours] = useState(1);
  const [price, setPrice] = useState(0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleHoursChange = (event) => {
    setSelectedHours(parseInt(event.target.value));
  };

  const calculatePrice = () => {
    const hourlyRate = 300;
    const calculatedPrice = selectedHours * hourlyRate;
    setPrice(calculatedPrice);
  };

  return (
    <div className="renting-page">
      <h1 className="titleRenting">Studio Rental Booking</h1>
      <div className="booking-form">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <label htmlFor="hours">Select Hours:</label>
        <input
          type="number"
          id="hours"
          min={1}
          value={selectedHours}
          onChange={handleHoursChange}
        />
        <button onClick={calculatePrice}>Calculate Price</button>
        <div className="price-display">
          <h3>Price: CHF{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default RentingPage;
