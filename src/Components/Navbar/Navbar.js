import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'
import octagon from '../../Images/octagon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Navbar extends Component {
  render() {
    return (

      <nav className="mb5">
        <div className='javalogo fl w-20 tc'>
          <Link to='/'><img src={mainLogo} /></Link>
        </div>
        <div className="acctInfo tc fl ph1 w-20 tc">
          <div />
          <p className="tc mt2">Username</p>
          <hr className="mv0" />
          <p className="octagon tr f2">4<img src={octagon} /></p>
        </div>
        <div className="acctInfo flex flex-inline tc">
          <p className="mt5 center"><Link to='/account'>Account Settings</Link></p>
          <p className="mt5 center"><Link to='/order'>Order</Link></p>
          <p className="mt5 center"><Link to='/ourshops'>Our Shops</Link></p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
