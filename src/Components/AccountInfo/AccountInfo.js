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
            newItem.innerHTML =
                this.state.type === 'personal'
                    ? `<p>${el.size ? el.size : ''} ${
                    el.name
                    } - £${el.price.toFixed(2)}`
                    : `<p>${el.name}(£${el.price.toFixed(2)}) x ${
                    el.quantity
                    } - £${(el.quantity * el.price).toFixed(2)}`;
            document
                .getElementById(`${this.state.type}History`)
                .appendChild(newItem);
        });
    };

    componentDidMount() {
        const { fetchApi, currentUserId } = this.props;
        fetchApi(`users/${currentUserId}`)
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
        fetchApi(`history/${currentUserId}`)
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
        ) : this.state.type === 'personal' ? (
            // Personal Account
            <div className="accountInfo flex flex-wrap justify-center">
                <div className="wrapper">
                    <div className="messages">
                        <div className="ph3 mh2 mv5">
                            <p>
                                Promo: Double Doughnut Wednesdays! Come in
                                between{' '}
                                <span className="highlight">
                                    1100 and 1300 Wednesdays
                                </span>{' '}
                                for Buy One Get One Free!
                            </p>
                            <p>
                                Also don't forget if you order ahead before 0900
                                you get 30% off a{' '}
                                <span className="highlight">
                                    {this.state.favDrink}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="status tc mv4">
                        <p className="mv5">
                            Hey there {this.state.name}! Hope you're having an
                            awesome day!
                        </p>
                        <p>
                            Your registered e-mail is{' '}
                            <span className="highlight">
                                {this.state.email}
                            </span>
                        </p>
                        <p>
                            If this is not correct please contact us to change
                            your registered email
                        </p>
                    </div>
                </div>

                <div
                    id="personalHistory"
                    className="history mh2 mv5 tc flex flex-column shadow-5"
                >
                    <p>Personal history</p>
                </div>
            </div>
        ) : (
                    // Business Account
                    <div className="accountInfo flex flex-wrap justify-center">
                        <div className="wrapper">
                            <div className="messages">
                                <div className="ph3 mh2 mv5">
                                    <p>Account Messages</p>
                                    <p className="mh4">
                                        We will soon be getting in a Micro Lot from
                                        Tanzania, likely at around £17/kg. A tad dearer
                                        than normal but if your business uses pour-overs
                                this is a <i>must have</i>.
                            </p>
                                </div>
                            </div>
                            <div className="status tc mv4">
                                <p className="mv5">
                                    Hey there {this.state.name}! Hope you're having an
                                    awesome day.
                        </p>
                                <p>
                                    Your registered e-mail is{' '}
                                    <span className="highlight">
                                        {this.state.email}
                                    </span>
                                </p>
                                <p>
                                    If this is not correct please contact us to change
                                    your registered email
                        </p>
                            </div>
                        </div>

                        <div
                            id="businessHistory"
                            className="history mv5 tc flex flex-column shadow-5"
                        />
                    </div>
                );
    }
}

export default AccountInfo;
