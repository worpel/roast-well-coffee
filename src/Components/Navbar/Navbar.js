import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'


class Navbar extends Component {
  render() {
    const { route, onRouteChange } = this.props;
    return (

      <nav className="mb5">
        <div className='javalogo fl w-20 tc'>
          <img src={mainLogo} />
        </div>
        <div className="acctInfo fl w-20 tc">
          <p className="mv3 mh5">Username</p>
        </div>
        <div className="acctInfo fl w-20 tc">
          <p className="mv1 mh5">Account Settings</p>
        </div>
        <div className="mainNav tc fl w-40">
          {/* <p className="br-pill mv3 inline-flex mh5 ba b--black pa3 ma"><Link to='/order'>Order</Link></p> */}
          {/* <p className="br-pill mv3 inline-flex mh5 ba b--black pa3 ma"><Link to='/'>Home</Link></p> */}
          <p className="br-pill inline-flex mh5 pa3 ma">4 Points</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
