import React, { Component } from 'react';
import './Order.css';

class Order extends Component {
  switchToCoffee = () => {
    let coffee = document.querySelector('.firstPane');
    let pastry = document.querySelector('.secondPane');
    pastry.classList.add('hidden');
    coffee.classList.remove('hidden');
  };
  switchToPastry = () => {
    let coffee = document.querySelector('.firstPane');
    let pastry = document.querySelector('.secondPane');
    coffee.classList.add('hidden');
    pastry.classList.remove('hidden');
  };

  timeSelector = () => {
    let hour = [7,8,9,10,11,12,13,14,15,16,17,18,19];
    let minute = [05,10,15,20,25,30,35,40,45,50,55];

  }

  render() {
    return (
      <div className="order">
        <div className="tabs" id="coffees">
          <button className="menuButtons" onClick={this.switchToCoffee}>
            Coffee
          </button>
        </div>

        <div className="tabs" id="pastry">
          <button className="menuButtons" onClick={this.switchToPastry}>
            Pastry
          </button>
        </div>

        <div className="firstPane">First Pane - Coffees</div>
        <div className="secondPane hidden">Second Pane - Pastries</div>


      </div>
    );
  }
}

export default Order;
