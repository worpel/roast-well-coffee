import React, { Component } from 'react';
import './Homepage.css';
import Background from '../../Images/background2';


const Homepage = () => {
  return (
    <div className="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
      <img src={Background} alt="background image" />
      <h1>Homepage</h1>
    </div>
  );
}



export default Homepage;
