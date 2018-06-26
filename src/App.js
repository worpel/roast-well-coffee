import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
// import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'home'
        };
    }

    onRouteChange = route => {
        this.setState({ route: route });
    };

    render() {
      const {route} = this.state;
        return (
            <div className="App">
                <Navbar route={route} onRouteChange={this.onRouteChange} />
                {/* <Logo /> */}
                {route === 'home' ? <Homepage /> : <Order /> }
                <Footer />
            </div>
        );
    }
}

export default App;
