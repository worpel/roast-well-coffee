import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import OurShops from './Components/OurShops/OurShops';
import AccountInfo from './Components/AccountInfo/AccountInfo';

import './App.css';

import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import tachyons from 'tachyons';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            currentUser: 1,
            userName: 'Not logged in yet'
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
            <Router>
                <div className="App flex flex-column">

                    <Navbar route={route} onRouteChange={this.onRouteChange} userName={this.state.userName} />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/account" render={props =>
                            <AccountInfo {...props} fetchApi={this.fetchApi} currentUser={this.state.currentUser} />
                        } />
                        <Route path="/shops" component={OurShops} />
                        <Route path="/order" render={props =>
                            <Order {...props} fetchApi={this.fetchApi} />
                        } />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;