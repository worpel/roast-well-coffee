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
