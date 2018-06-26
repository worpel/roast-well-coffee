import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Logo />
        <Homepage />
        <Order />
        <Footer />
      </div>
    );
  }
}

export default App;
