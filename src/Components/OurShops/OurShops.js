import React, { Component } from 'react';
import './OurShops.css';
import mancMap from '../../Images/mancMap.jpg';
import didsMap from '../../Images/didsMap.jpg';
import mancShop from '../../Images/background3.jpg';
import didsShop from '../../Images/background4.jpg';

class OurShops extends Component {
    render() {
        return (
            <div className="mainShop flex">
                <div className="w-50 flex flex-column mb5">
                    <p className="tc">Northern Quarter</p>
                    <div className="shop1 center mb5">
                        <img src={mancShop} alt="map to our manchester store" />
                    </div>
                    <div className="map1 center">
                        <img src={mancMap} alt="map to our manchester store" />
                    </div>
                </div>
                <div className="w-50 flex flex-column mb5">
                    <p className="tc">Didsbury</p>
                    <div className="shop2 center mb5">
                        <img src={didsShop} alt="map to our manchester store" />
                    </div>
                    <div className="map2 center">
                        <img src={didsMap} alt="map to our didsbury store" />
                    </div>
                </div>
            </div>
        );
    }
}

export default OurShops;
