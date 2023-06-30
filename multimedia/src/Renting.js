import React, { useState } from 'react';
import './renting.css';

function RentingPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHours, setSelectedHours] = useState(1);
  const [selectedStudio, setSelectedStudio] = useState('');
  const [price, setPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleHoursChange = (event) => {
    setSelectedHours(parseInt(event.target.value));
  };

  const handleStudioChange = (event) => {
    setSelectedStudio(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const calculatePrice = () => {
    let hourlyRate = 0;
    switch (selectedStudio) {
      case 'Northlake A':
        hourlyRate = 300;
        break;
      case 'Northlake B':
        hourlyRate = 225;
        break;
      case 'Northlake C':
        hourlyRate = 180;
        break;
      case 'Northlake D':
        hourlyRate = 140;
        break;
      default:
        hourlyRate = 0;
        break;
    }
    const calculatedPrice = selectedHours * hourlyRate;
    setPrice(calculatedPrice);
  };

  const handleConfirmation = () => {
    setIsConfirmed(true);
  };

  return (
    <div className="renting-page">
      <div className="title-container">
        <h1 className="titleRenting">Studio Rental Booking</h1>
      </div>
      <div className="booking-container">
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
          <label htmlFor="studio">Select Studio:</label>
          <select
            id="studio"
            value={selectedStudio}
            onChange={handleStudioChange}
          >
            <option value="">Choose a studio</option>
            <option value="Northlake A">Northlake A</option>
            <option value="Northlake B">Northlake B</option>
            <option value="Northlake C">Northlake C</option>
            <option value="Northlake D">Northlake D</option>
          </select>
          <button onClick={calculatePrice}>Calculate Price</button>
          <div className="price-display">
            <h3>Price: CHF {price}</h3>
          </div>
        </div>
        <div className="personal-form">
        <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
      <div className="confirmation-block">
        {isConfirmed ? (
          <p className="confirmation-message">
            Booking confirmed!
          </p>
        ) : (
          <button id="confirmation" onClick={handleConfirmation}>
            Confirm
          </button>
        )}
      </div>
    </div>

    
  );
}

export default RentingPage;
