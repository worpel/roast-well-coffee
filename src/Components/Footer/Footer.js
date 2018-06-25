import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="locationInfo fl w-30">
            <p className="mh5">Username</p>
            <p className="mh5">Account Settings</p>
          </div>
          <div className="openingHours fl w-30">
            <p className="mh5">Username</p>
            <p className="mh5">Account Settings</p>
          </div>
          <div className="Map fl w-30">
            <p className="mh5">Username</p>
            <p className="mh5">Account Settings</p>
          </div>
          <div className="flex socials fl w-100">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Feefo</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
