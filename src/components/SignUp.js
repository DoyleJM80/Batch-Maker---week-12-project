import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <div>
        <div>
          <h3 className="col-8 hor-center  dark-grey light-grey-text">Already a member?  <NavLink exact to="/sign-in"><button className="dark-grey light-grey-text sign-in-button no-border">Sign In</button></NavLink></h3>
        </div>
        <form className="flex column col-8 hor-center space-around form-size dark-grey">
          <label className="light-grey-text label-align">First Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="first-name" placeholder="First Name"/>
          <label className="light-grey-text label-align">Last Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="last-name" placeholder="Last Name"/>
          <label className="light-grey-text label-align">User Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="user-name" placeholder="User Name"/>
          <label className="light-grey-text label-align">Password</label>
          <input className="input-size hor-center light-grey form-input no-border" type="password" name="password" placeholder="Password"/>
          <label className="light-grey-text label-align">Confirm Password</label>
          <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password"/>
          <input className="submit-button light-grey" type="submit"/>
        </form>
      </div>
    );
  };
};
