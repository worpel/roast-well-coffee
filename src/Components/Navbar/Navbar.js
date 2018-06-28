import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainLogo from '../../Images/roastwelllogo.png'
import octagon from '../../Images/octagon.png'


class Navbar extends Component {
  render() {
    const {loggedIn, user} = this.props;
    return (

      <nav className="mv5 mh2 flex justify-between items-center">
        <div className='javalogo tc'>
          <Link to='/'><img src={mainLogo} /></Link>
        </div>
        <div className="username tc ph1 tc">
          <p className="username">{user.name ? user.name : 'Welcome'}</p>
        </div>
        <div className="acctInfo flex flex-inline tc">
          {loggedIn ?
            <p className="ph2 center linkitem"><Link to='/account'>Account</Link></p>
            :
            <p className="ph2 center linkitem"><Link to='/account'>Log In</Link></p>}
          <p className="hBreak">|</p>
          <p className="ph2 center linkitem"><Link to='/order'>Order</Link></p>
          <p className="hBreak">|</p>
          <p className="ph2 center linkitem"><Link to='/ourshops'>Our Shops</Link></p>
        </div>
        <div className="currentpoints">
          <p className="tc pb4 f3">{user.rewardPoints ? user.rewardPoints : ''}</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
