import React, { Component } from 'react';
import './Order.css';

class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="tabs" id="coffees">
          <button className="menuButtons" onclick="">
            Coffee
          </button>
        </div>

        <div className="tabs" id="pastry">
          <button className="menuButtons" onclick="">
            Pastry
          </button>
        </div>
      </div>
    );
  }
}

export default Order;
