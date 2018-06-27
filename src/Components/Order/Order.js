import React, { Component } from 'react';
import './Order.css';

class Order extends Component {
  switchTabs = clickedTab => {
    let otherTab = clickedTab === 'coffee' ? 'pastry' : 'coffee';
    document.getElementById(`${clickedTab}-panel`).classList.remove('hidden');
    document.getElementById(`${otherTab}-panel`).classList.add('hidden');
  };
  updateDrinksList = () => {
    {
      this.state.drinks.forEach(el => {
        let item = document.createElement('tr');
        item.textContent = el.name;
        document.getElementById('drinks-list').appendChild(item);
      });
    }
  };
  updatePastriesList = () => {
    {
      this.state.pastries.forEach(el => {
        let item = document.createElement('tr');
        item.textContent = el.name;
        document.getElementById('pastries-list').appendChild(item);
      });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      pastries: []
    };
  }
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi('drinks')
      .then(resp => resp.json())
      .then(data => {
        data.forEach(el => {
          this.state.drinks.push(el);
        });
        this.updateDrinksList();
      })
      .catch(err => {
        console.log(err);
      });
    fetchApi('pastries')
      .then(resp => resp.json())
      .then(data => {
        data.forEach(el => {
          this.state.pastries.push(el);
        });
        this.updatePastriesList();
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="order">
        <div id="coffees">
          <button
            id="coffee"
            className="menuButtons"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Coffee
          </button>
        </div>

        <div id="pastry">
          <button
            id="pastry"
            className="menuButtons"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Pastry
          </button>
        </div>
        <div id="tabContent">
          <div id="coffee-panel" className="firstPane">
            <table class="item-table" id="drinks-list">
              {/* <img
                            className="coffeeImg"
                            src="http://via.placeholder.com/1000x1000"
                        /> */}
            </table>
          </div>
          <div id="pastry-panel" className="secondPane hidden">
            <table class="item-table" id="pastries-list" />
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
