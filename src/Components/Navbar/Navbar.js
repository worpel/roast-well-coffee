import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends Component {
  render() {
    return (

      <nav className="mb5 mt5 flex justify-between items-center">
        <div className='javalogo tc'>
          <Link to='/'><img src={mainLogo} /></Link>
        </div>
        <div className="acctInfo tc ph1 tc">
          <div />
          <p className="tc">Username</p>
        </div>
        <div className="acctInfo flex flex-inline tc">
          <p className="ph2 center"><Link to='/account'>Account Settings</Link></p>
          <p className="hBreak">|</p>
          <p className="ph2 center"><Link to='/order'>Order</Link></p>
          <p className="hBreak">|</p>
          <p className="ph2 center"><Link to='/ourshops'>Our Shops</Link></p>
        </div>
        <div>
        <p className="tc pb4 f3">4</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
