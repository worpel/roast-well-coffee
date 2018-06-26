import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="locationInfo fl w-30">
          <p className="mh5">Contact Us</p>
          <p className="mh5">
            Phone<br />
            E-mail<br />
            Carrier Pidgeon<br />
            Paper Airoplane <br />
          </p>
        </div>
        <div className="openingHours fl w-30">
          <p className="mh5">Hours</p>
          <p className="mh5">
            Mon 7am-6pm<br />
            Tues 7am-6pm<br />
            Wed 7am-6pm<br />
            Thurs 7am-6pm<br />
            Fri 7am-6pm<br />
            Sat 8am-9pm<br />
            Sun 8am-5pm<br />
          </p>
        </div>
        <div className="Map fl w-30">
          <p className="mh5">Instagram tile images</p>
          <div>
            <img className='instatile' src='instacoffee.jpg' />
          </div>
        </div>
        <div className="flex socials mt3 fl w-100">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Feefo</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
