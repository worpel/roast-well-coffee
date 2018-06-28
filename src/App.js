import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import OurShops from './Components/OurShops/OurShops';
import AccountInfo from './Components/AccountInfo/AccountInfo';
import Login from './Components/Login/Login';

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
            currentUserId: 2,
            currentUser: {},
            loggedIn: false
        };
    }

    onRouteChange = route => {
        this.setState({ route: route });
    };

    fetchApi = table => {
        return fetch(`http://localhost:3001/${table}`);
    };

    checkUserLogin = userdata => {
        const {email, password} = userdata;
        this.setState({
            loggedIn: true
        })
    }

    render() {
        const { route } = this.state;
        return (
            <Router>
            <div className="App flex flex-column">

                <Navbar userName={this.state.userName} loggedIn={this.state.loggedIn}/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {this.state.loggedIn === true ?
                        <Route path="/account" render={props => 
                        <AccountInfo {...props} fetchApi={this.fetchApi} currentUserId={this.state.currentUserId} />
                    } />
                    :
                    <Route path="/login" render={props => 
                        <Login {...props} fetchApi={this.checkUserLogin} />
                    }/>}
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