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
        let itemImg = document.createElement('img');
        item.classList.add('pv5', 'ph4', 'tableRow', 'bb');
        item.textContent = el.name;
        document.getElementById('drinks-list').appendChild(item);
      });
    }
  };
  updatePastriesList = () => {
    {
      this.state.pastries.forEach(el => {
        let item = document.createElement('tr');
        let itemImg = document.createElement('img');
        let itemSelect = document.createElement('input');
        item.classList.add('pv5', 'ph4', 'tableRow', 'bb');
        item.textContent = el.name;
        itemSelect.attributes.type = 'checkbox';
        console.log(itemSelect.attributes.type);
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
        <div id="buttons" className="flex">
          <button
            id="coffee" className="btn"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Coffee
          </button>
          <button
            id="pastry" className="btn"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Pastry
          </button>
        </div>
        <div id="tabContent">
          <div id="coffee-panel" className="item-pane firstPane">
            <table className="item-table flex flex-column" id="drinks-list">
              {/* <img
                            className="coffeeImg"
                            src="http://via.placeholder.com/1000x1000"
                        /> */}
            </table>
          </div>
          <div id="pastry-panel" className="item-pane secondPane hidden">
            <table className="item-table flex flex-column" id="pastries-list" />
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
