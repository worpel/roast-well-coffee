import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="mv5 flex flex-column w-40 center">
        <label htmlFor="email">Email</label>
          <input className="mb4 mt2" name="email" type="email"/>
          <label htmlFor="password">Password</label>
          <input className="mb4 mt2" type="password" name="password" id="password"/>
          <button className="center pv2 ph3 w-30 submit">Submit</button>
      </div>
    );
  }
}

export default Login;
