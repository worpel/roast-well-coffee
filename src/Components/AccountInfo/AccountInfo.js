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
            type: ''
        };
    }
    render() {
        const { fetchApi } = this.props;
        const userData = fetchApi('users/1')
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

        return !userData ? (
            <div>Loading</div>
        ) : (
            <div className="accountInfo">
                <div className="messages mh5 fl w-80">
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
                            <div className="business messages">
                                <p>Business Account</p>
                            </div>
                        </div>
                    )}
                </div>
                {this.state.type === 'personal' ? (
                    <div>
                        {/* Personal Account */}
                        <div className="rewardPoints mh2 fl w-40">
                            <p>{this.state.rewardPoints}</p>
                        </div>
                        <div className="history mh2 fl w-40" />
                        <p>Personal history</p>
                        <ul></ul>
                    </div>
                ) : (
                    <div>
                        {/* Business Account */}
                        <div className="history mh2 fl w-40"> </div>
                        <p>Business History</p>
                        <ul></ul>
                    </div>
                )}
                {this.state.type === 'personal' ? (
                    <div className="personal details fl w-100">
                        <p className="details">
                            Hey there {this.state.name}! Hope you're having an
                            awesome day.
                        </p>
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
