import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
          <div className="acctInfo fl w-30">
            <p className="mh5">Username</p>
            <p className="mh5">Account Settings</p>
          </div>
          <div className="mainNav fl w-70">
            <p className="br-pill inline-flex mh5 ba b--black pa3 ma">Order</p>
            <p className="br-pill inline-flex mh5 ba b--black pa3 ma">4 Points</p>
          </div>
        </nav>
    ); 
  }
}

export default Navbar;
