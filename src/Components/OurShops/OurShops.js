import React, { Component } from 'react';
import './OurShops.css';

class OurShops extends Component {
  render() {
    return (
      <div className="mainShop flex">
        <div className="w-50">
          <p>Northern Quarter</p>
          <div className='Shop1 shadow-6 center'></div>
          <div className='Map1'></div>
          <p>Map 2</p>
        </div>
        <div>
        </div>
        <div className='w-50'>
          <p className='tr flex center shadow-6'>Didsbury</p>
          <div className='Shop2 shadow-6 center'></div>
          <div className='Map2'></div>
          <p className='tr flex center shadow-6'>Map 2</p>
        </div>
      </div >
    );
  }
}

export default OurShops;
