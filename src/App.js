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
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import tachyons from 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      currentUser: {},
      loggedIn: false
    };
  }

  fetchApi = table => {
    return fetch(`http://localhost:3001/${table}`);
  };

  checkLoginValid = userdata => {
    const { email, password } = userdata;
    let users = this.fetchApi('users')
      .then(resp => resp.json())
      .then(data =>
        data.forEach(el => {
          if (email === el.email && password === el.password) {
            this.setState({
              currentUser: el,
              loggedIn: true
            });
          }
        })
      );
  };

  render() {
    const { route } = this.state;
    return (
      <Router>
        <div className="App flex flex-column">
          <Navbar
            user={this.state.currentUser}
            loggedIn={this.state.loggedIn}
          />
          <Switch>
            <Route exact path="/" component={Homepage} />
            {this.state.loggedIn === true ? (
              <Route
                path="/account"
                render={props => (
                  <AccountInfo
                    {...props}
                    fetchApi={this.fetchApi}
                    currentUserId={this.state.currentUser.uid}
                  />
                )}
              />
            ) : (
              <Route
                path="/account"
                render={props => (
                  <Login
                    {...props}
                    checkUserLogin={this.checkUserLogin}
                    checkLoginValid={this.checkLoginValid}
                  />
                )}
              />
            )}
            <Route path="/ourshops" component={OurShops} />
            <Route
              path="/order"
              render={props => <Order {...props} fetchApi={this.fetchApi} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
