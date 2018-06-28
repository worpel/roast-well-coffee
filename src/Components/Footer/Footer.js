import React, { Component } from 'react';
import './Footer.css';
import insta from '../../Images/instacoffee.jpg';
import tile2 from '../../Images/doggo.jpg';
import tile3 from '../../Images/flaskcoffee.jpg';


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
              <a href="https://www.instagram.com/?hl=en">
                <p className='f3 center'>Instagram</p>
              </a>
              <img className='instagram shadow-6' src={insta} />
              <img className='tile2 shadow-6' src={tile2} />
              <img className='tile3 shadow-6' src={tile3} />
            </div>
            <div className="flex socials fl w-100">
              <a href="https://en-gb.facebook.com/">
                <p>Facebook</p>
              </a>
              <a href="https://twitter.com/twitter?lang=en">
                <p>Twitter</p>
              </a>
              <a href="https://www.feefo.com/">
                <p>Feefo</p>
              </a>
            </div>
          </div>

        </div >
      </footer >
    );
  }
}

export default Footer;
