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
        <div id="coffees">
          <button className="menuButtons" onClick={this.switchToCoffee}>
            Coffee
          </button>
        </div>

        <div id="pastry">
          <button className="menuButtons" onClick={this.switchToPastry}>
            Pastry
          </button>
        </div>
        <div id="tabContent">
          <div className="firstPane">
            <img class="coffeeImg" src="http://via.placeholder.com/1000x1000" />
          </div>
          <div className="secondPane hidden">Second Pane - Pastries</div>
        </div>
      </div>
    );
  }
}

export default Order;
