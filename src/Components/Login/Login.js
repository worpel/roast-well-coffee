import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    const {checkLoginValid} = this.props;
    return (
      <div className="mt3 mb6 flex flex-column w-40 center">
        <label htmlFor="email">Email</label>
          <input id="email" className="mb4 mt2" name="email" type="email"/>
          <label htmlFor="password">Password</label>
          <input id="password" className="mb4 mt2" type="password" name="password" id="password"/>
          <button onClick={() => {checkLoginValid({email: document.getElementById('email').value, password: document.getElementById('password').value})}} className="center pv2 ph3 w-30 submit">Submit</button>
      </div>
    );
  }
}

export default Login;
