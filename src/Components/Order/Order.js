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
        const create = el => document.createElement(el);
        let row = create('tr');

        let nameTd = create('td');
        let sizeTd = create('td');
        let milkTd = create('td');
        let syrupsTd = create('td');
        let optionsTd = create('td');
        let priceTd = create('td');

        let selectBox1 = create('select');
        let selectBox2 = create('select');
        let selectBox3 = create('select');
        let selectBox4 = create('select');
        selectBox1.innerHTML = `<option>${el.sizes[0]}</option><option>${
          el.sizes[1]
        }</option>`;
        selectBox2.innerHTML = `<option>${el.milk[0]}</option><option>${
          el.milk[1]
        }</option><option>${el.milk[2]}</option>`;
        selectBox3.innerHTML = `<option>${el.syrups[0]}</option><option>${
          el.syrups[1]
        }</option><option>${el.syrups[2]}</option>`;
        selectBox4.innerHTML = `<option>${el.options[0]}</option><option>${
          el.options[1]
        }</option><option>${el.options[2]}</option>`;
        nameTd.textContent = el.name;
        priceTd.textContent = `Total: £${el.price.toFixed(2)}`;
        sizeTd.appendChild(selectBox1);
        milkTd.appendChild(selectBox2);
        syrupsTd.appendChild(selectBox3);
        optionsTd.appendChild(selectBox4);
        row.appendChild(nameTd);
        row.appendChild(sizeTd);
        row.appendChild(milkTd);
        row.appendChild(syrupsTd);
        row.appendChild(optionsTd);
        row.appendChild(priceTd);
        row.classList.add('pv5', 'ph4', 'tableRow', 'bb');
        document.getElementById('drinks-list').appendChild(row);
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
