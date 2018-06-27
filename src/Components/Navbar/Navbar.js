import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    const { route, onRouteChange } = this.props;
    return (

      <nav className="mb4">
        <div className='javalogo'>
          <img src="roastwelllogo.png" />
        </div>
        <div className="acctInfo fl w-30">
          <p className="mv3 mh5">Username</p>
          <p className="mv1 mh5">Account Settings</p>
        </div>
        <div className="mainNav fl w-70">
          {route === 'home' ?
            <p className="br-pill mv3 inline-flex mh5 ba b--black pa3 ma" onClick={() => { onRouteChange('order') }}>Order</p>
            :
            <p className="br-pill mv3 inline-flex mh5 ba b--black pa3 ma" onClick={() => { onRouteChange('home') }}>Home</p>
          }
          <p className="br-pill inline-flex mh5 ba b--black pa3 ma">4 Points</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
