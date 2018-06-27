import React, { Component } from 'react';
import './AccountInfo.css';

class AccountInfo extends Component {
  render() {
    const {fetchApi} = this.props;
    const userData = fetchApi('users/3')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      const {name, type, favDrink, rewardPoints, email} = data[0];
      this.refs.name.textContent = name;
      this.refs.favDrink.textContent = favDrink;
      this.refs.rewardPoints.textContent = rewardPoints;
      this.refs.email.textContent = email;
      }
    )

    return !userData ?
    (<div>Loading</div>)
    :
    
    (
      <div className="accountInfo">
        <div className="messages mh5 fl w-80">
          <p>Promo: Double Doughnut Wednesdays! Come in between 1100 and 1300 Wednesdays for Buy One Get One Free!</p>
          <p>Also don't forget if you order ahead before 0900 you get 30% off a <span ref="favDrink"></span></p>
        </div>
        <div className="rewardPoints mh2 fl w-40">

          <p ref="rewardPoints">{userData.rewardPoints}</p>
        </div>
        <div className="history mh2 fl w-40">
        
        </div>
        <div className="personalDeets fl w-100">
          <p className="details">Hey there <span ref="name"></span>! Hope you're having an awesome day.</p>
          <p>Your registered e-mail is <span ref="email"></span> </p>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
