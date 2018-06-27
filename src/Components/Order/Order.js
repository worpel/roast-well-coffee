import React, { Component } from 'react';
import './Order.css';

class Order extends Component {
  switchTabs = (clickedTab) => {
    let otherTab = clickedTab === 'coffee' ? 'pastry' : 'coffee';
    document.getElementById(`${clickedTab}-panel`).classList.remove('hidden');
    document.getElementById(`${otherTab}-panel`).classList.add('hidden');
  };
  render() {
    return (
      <div className="order">
        <div id="coffees">
          <button id="coffee" className="menuButtons" onClick={(e) => this.switchTabs(e.target.id)}>
            Coffee
          </button>
        </div>

        <div id="pastry">
          <button id="pastry" className="menuButtons" onClick={(e) => this.switchTabs(e.target.id)}>
            Pastry
          </button>
        </div>
        <div id="tabContent">
          <div id="coffee-panel" className="firstPane">
            <img className="coffeeImg" src="http://via.placeholder.com/1000x1000" />
          </div>
          <div id="pastry-panel" className="secondPane hidden">Second Pane - Pastries</div>
        </div>
      </div>
    );
  }
}

export default Order;
