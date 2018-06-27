import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
import AccountInfo from './Components/AccountInfo/AccountInfo';
// import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            currentUser: {}
        };
    }

    onRouteChange = route => {
        this.setState({ route: route });
    };

    fetchApi = table => {
      return fetch(`http://localhost:3001/${table}`)

    };

    render() {
      const {route} = this.state;
        return (
            <div className="App">
                <Navbar route={route} onRouteChange={this.onRouteChange} />
                {/* <Logo /> */}
                {route === 'order' ? <Homepage /> : <Order fetchApi={this.fetchApi} /> }
                {/* {route === 'home' ? <AccountInfo fetchApi={this.fetchApi}/> : <Order fetchApi={this.fetchApi} /> } */}
                <Footer />
            </div>
        );
    }
}

export default App;
