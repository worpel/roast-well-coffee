import React, { Component } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Order from './Components/Order/Order';
import tachyons from 'tachyons';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
        <Order />
        <Footer />
      </div>
    );
  }
}

export default App;
