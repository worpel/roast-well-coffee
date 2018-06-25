import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
          <div className="acctInfo fl w-20">
            <p>Username</p>
            <p>Account Settings</p>
          </div>
          <div className="mainNav fl w-80">
            <p className="br-pill b--black">Order</p>
            <p className="br-pill">4 Points</p>
          </div>
        </nav>
    );
  }
}

export default Navbar;
