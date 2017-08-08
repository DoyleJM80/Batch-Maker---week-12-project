import React, {Component} from 'react';

export default class SignUp extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <div>
        <form>
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name"/>
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name"/>
          <label>User Name</label>
          <input type="text" name="user-name" placeholder="User Name"/>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password"/>
        </form>
      </div>
    );
  };
};
