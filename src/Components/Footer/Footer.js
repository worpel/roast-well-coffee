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
            <p className="mh5">Hours</p>
            <p className="mh5">Don't bother, we're closed</p>
          </div>
          <div className="Map fl w-30">
            <p className="mh5">MAP GOES HERE</p>
          </div>
          <div className="flex socials mt3 fl w-100">
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
