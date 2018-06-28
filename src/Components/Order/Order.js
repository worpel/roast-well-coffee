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
        let row = document.createElement('tr');
        let nameTd = document.createElement('td');
        let sizeTd = document.createElement('td');
        let selectBox = document.createElement('select');
        console.log(el);
        selectBox.innerHTML = `<option>${el.sizes[0]}</option><option>${
          el.sizes[1]
        }</option>`;
        sizeTd.appendChild(selectBox);
        nameTd.textContent = el.name;
        console.log(nameTd);
        row.appendChild(nameTd);
        row.appendChild(sizeTd);
        row.classList.add('pv5', 'ph4', 'tableRow', 'bb');
        // let itemImg = document.createElement('img');
        // let itemSelect = document.createElement('option');

        // item.textContent = el.name;
        document.getElementById('drinks-list').appendChild(row);
        // document.getElementById('drinks-list').appendChild(itemSelect);
      });
    }
  };
  updatePastriesList = () => {
    {
      this.state.pastries.forEach(el => {
        let item = document.createElement('tr');
        let itemImg = document.createElement('img');
        let itemSelect = document.createElement('option');
        item.classList.add('pv5', 'ph4', 'tableRow', 'bb');
        item.textContent = el.name;
        document.getElementById('pastries-list').appendChild(item);
        document.getElementById('pastries-list').appendChild(itemSelect);
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
            id="coffee"
            className="btn"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Coffee
          </button>
          <button
            id="pastry"
            className="btn"
            onClick={e => this.switchTabs(e.target.id)}
          >
            Pastry
          </button>
        </div>
        <div id="tabContent">
          <div id="coffee-panel" className="item-pane firstPane">
            <table className="item-table flex flex-column">
              <tbody id="drinks-list" />
              {/* <select id="drinks-checkbox" className="item-checkbox" /> */}
            </table>
            {/* <img
                            className="coffeeImg"
                            src="http://via.placeholder.com/1000x1000"
                        /> */}
          </div>
          <div id="pastry-panel" className="item-pane secondPane hidden">
            <table className="item-table flex flex-column">
              <tbody id="pastries-list" />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
