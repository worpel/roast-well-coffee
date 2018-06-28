import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'


class Navbar extends Component {
  render() {
    return (

      <nav className="mb5">
        <div className='javalogo fl w-20 tc'>
        <Link to='/'><img src={mainLogo} /></Link>
        </div>
        <div className="acctInfo tr fl ph1 w-20 tc">
          <div />
          <p className="mv3 mh5">Username</p>
          <hr/>
          <p className="br-pill flex tr mh5 pa3 ma">4 Points</p>
        </div>
        <div className="acctInfo fl w-20 tc">
          <p className="mv1 mh5"><Link to='/account'>Account Settings</Link></p>
          <p className="br-pill mv3 inline-flex mh5 ma"><Link to='/order'>Order</Link></p>
          <p className="br-pill mv3 inline-flex mh5 ma"><Link to='/ourshops'>Our Shops</Link></p>
        </div>
        <div className="mainNav tc fl w-40">
        </div>
      </nav>
    );
  }
}

export default Navbar;
