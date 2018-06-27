import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import OurShops from './Components/OurShops/OurShops';

import tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
import AccountInfo from './Components/AccountInfo/AccountInfo';
// import './App.css';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

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
        return fetch(`http://localhost:3001/${table}`);
    };

    render() {
        const { route } = this.state;
        return (
            // <Router>
            <div className="App">

                <Navbar route={route} onRouteChange={this.onRouteChange} />
                {route === 'home' ? <AccountInfo fetchApi={this.fetchApi} /> : <Order fetchApi={this.fetchApi} />}
                {/* <Switch>
                    <Route exact path="/" Component={Homepage} />
                    <Route path="/account" Component={AccountInfo} />
                    <Route path="/shops" Component={OurShops} />
                    <Route path="/order" Component={Order} />
                </Switch> */}
                <Footer />
            </div>
            // </Router>
        );
    }
}

export default App;

// {/* <Logo /> */}
// {route === 'order' ? <Homepage /> : <Order fetchApi={this.fetchApi} /> }

