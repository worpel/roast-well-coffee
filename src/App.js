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

<<<<<<< HEAD
    checkLoginValid = userdata => {
        const {email, password} = userdata;
        let users = this.fetchApi('users')
        .then(resp => resp.json())
        .then(data => data.forEach(el => {
            if (email === el.email && password === el.password) {
                this.setState({
                    currentUser: el,
                    loggedIn: true
                });

            }
        }));

    }

    render() {
        const { route } = this.state;
        return (
            <Router>
                <div className="App flex flex-column">

                <Navbar user={this.state.currentUser} loggedIn={this.state.loggedIn}/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {this.state.loggedIn === true ?
                        <Route path="/account" render={props => 
                        <AccountInfo {...props} fetchApi={this.fetchApi} currentUserId={this.state.currentUser.uid} />
                    } />
                    :
                    <Route path="/login" render={props => 
                        <Login {...props} checkUserLogin={this.checkUserLogin} checkLoginValid={this.checkLoginValid} />
                    }/>}
                    <Route path="/ourshops" component={OurShops} />
                    <Route path="/order" render={props => 
                        <Order {...props} fetchApi={this.fetchApi} />
                    } />
                </Switch>
                <Footer />
            </div>
            </Router>
        );
    }
=======
  onRouteChange = route => {
    this.setState({ route: route });
  };

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
            console.log(el);
            this.setState({
              currentUser: el,
              loggedIn: true
            });
            console.log(this.state.currentUser);
          } else {
            console.log('Sorry, username and password did not match');
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
            userName={this.state.userName}
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
                path="/login"
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
>>>>>>> e807ac9c5635643b440f6524cce22413b9c4d14a
}

export default App;
