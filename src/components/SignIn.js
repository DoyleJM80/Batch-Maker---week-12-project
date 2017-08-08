import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class SignIn extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div className="margin-top">
        <div>
          <div>
            <h3 className="col-8 hor-center dark-grey light-grey-text">Not a member?  <NavLink exact to="/sign-up"><button className="dark-grey light-grey-text sign-in-button no-border">Sign Up</button></NavLink></h3>
          </div>
          <form className="flex column col-8 hor-center space-around form-size dark-grey">
            <label className="light-grey-text label-align" htmlFor="u-name">User Name</label>
            <input className="input-size hor-center light-grey form-input no-border" type="text" name="user-name" placeholder="User Name" id="u-name"/>
            <label className="light-grey-text label-align" htmlFor="p-word">Password</label>
            <input className="input-size hor-center light-grey form-input no-border" type="password" name="password" placeholder="Password" id="p-word"/>
            <label className="light-grey-text label-align" htmlFor="conf-password">Confirm Password</label>
            <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="conf-password"/>
            <input className="submit-button light-grey" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};
