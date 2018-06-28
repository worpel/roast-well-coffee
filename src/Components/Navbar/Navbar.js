import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'
import octagon from '../../Images/octagon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends Component {
  render() {
    return (

      <nav className="mv5 mh2 flex justify-between items-center">
        <div className='javalogo tc'>
          <Link to='/'><img src={mainLogo} /></Link>
        </div>
        <div className="username tc ph1 tc">
          <p className="username">Username</p>
        </div>
        <div className="acctInfo flex flex-inline tc">
          <p className="ph2 center linkitem"><Link to='/account'>Account Settings</Link></p>
          <p className="hBreak">|</p>
          <p className="ph2 center linkitem"><Link to='/order'>Order</Link></p>
          <p className="hBreak">|</p>
          <p className="ph2 center linkitem"><Link to='/ourshops'>Our Shops</Link></p>
        </div>
        <div className="currentpoints">
          <p className="tc pb4 f3">4</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
