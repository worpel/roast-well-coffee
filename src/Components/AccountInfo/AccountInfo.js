import React, { Component } from 'react';
import './AccountInfo.css';

class AccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            favDrink: '',
            rewardPoints: '',
            email: '',
            type: '',
            history: []
        };
    }

    updateHistory = data => {
        this.state.history.forEach(el => {
            let newItem = document.createElement('div');
            newItem.classList = 'mh4'
            newItem.innerHTML = this.state.type === 'personal' ?
            `<p>${el.size ? el.size : ''} ${el.name} - £${el.price.toFixed(2)}` :
            `<p>${el.name}(£${el.price.toFixed(2)}) x ${el.quantity} - £${(el.quantity*el.price).toFixed(2)}`
            document.getElementById(`${this.state.type}History`).appendChild(newItem)
        })
    }

    componentDidMount() {
        const { fetchApi, currentUser } = this.props;
        fetchApi(`users/${currentUser}`)
            .then(resp => resp.json())
            .then(data => {
                const { name, type, favDrink, rewardPoints, email } = data[0];
                this.setState({
                    name: name,
                    favDrink: favDrink,
                    rewardPoints: rewardPoints,
                    email: email,
                    type: type
                });
            })
            .catch(err => {
                console.log(err);
            });
        fetchApi(`history/${currentUser}`)
            .then(resp => resp.json())
            .then(data => {
                const { productsOrdered } = data[0];
                this.setState({
                    history: productsOrdered
                });
                this.updateHistory(this.state.history);
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return !this.state.name ? (
            <div>Loading...</div>
        ) : (
            <div className="accountInfo flex center flex-column justify-center">
                <div className="messages">
                    {this.state.type === 'personal' ? (
                        <div className="personal messages">
                            {/* Personal Account */}
                            <p>
                                Promo: Double Doughnut Wednesdays! Come in
                                between 1100 and 1300 Wednesdays for Buy One Get
                                One Free!
                            </p>
                            <p>
                                Also don't forget if you order ahead before 0900
                                you get 30% off a {this.state.favDrink}.
                            </p>
                        </div>
                    ) : (
                        <div>
                            {/* Business Account */}
                            <div className="mh2 business messages">
                                <p>Account Messages</p>
                                <p className="mh4">We will soon be getting in a Micro Lot from Tanzania, likely at around £17/kg. A tad dearer than normal but if your business uses pour-overs this is a <i>must have</i>.</p>
                            </div>
                        </div>
                    )}
                </div>
                {this.state.type === 'personal' ? (
                    <div>
                        {/* Personal Account */}
                        <div
                            id="personalHistory"
                            className="history mh2 fl w-50"
                        >
                            <p>Personal history</p>
                            <ul />
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Business Account */}
                        <div
                            id="businessHistory"
                            className="history mh2 flex flex-column"
                        >
                        </div>
                        <ul />
                    </div>
                )}
                {this.state.type === 'personal' ? (
                    <div className="personaldetails fl w-100">
                        Hey there {this.state.name}! Hope you're having an
                        awesome day.
                        <p className="details" />
                        <p>Your registered e-mail is {this.state.email}</p>
                    </div>
                ) : (
                    <div className="business details fl w-100">
                        <p>
                            Hey there {this.state.name}! Hope you're having an
                            awesome day!
                        </p>
                        <p>Your registered e-mail is {this.state.email}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default AccountInfo;
