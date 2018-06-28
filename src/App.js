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
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';



library.add(fab, faStar);

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            currentUser: 4,
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
            <div className="App">

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