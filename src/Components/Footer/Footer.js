import React, { Component } from 'react';
import './Footer.css';
import insta from '../../Images/instacoffee.jpg'

class Footer extends Component {
  render() {
    return (
      <footer className="fl w-100">
        <div>

          <div className="locationInfo fl w-30">
            <p className="mh5">Contact Us</p>
            <p className="mh5">
              Phone: 02083356788<br />
              E-mail: roastwell@gmail.com<br />
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
          <div className='stylefooter'>
            <div className="Map fl w-30">
              <p className='f4 center'>Instagram</p>
              <img className='instagram shadow-5' src={insta} />

            </div>
            <div className="flex socials fl w-100">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Feefo</p>
            </div>
          </div>

        </div >
      </footer >
    );
  }
}

export default Footer;
