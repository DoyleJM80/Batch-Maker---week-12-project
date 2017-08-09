import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signup} from '../actions/index';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(event) {
    let obj = {};
    let key = event.target.name;
    obj[key] = event.target.value;
    this.setState(obj);
  }



  render() {
    return(
      <div className="margin-top">
        <div>
          <h3 className="col-8 hor-center  dark-grey light-grey-text">Already a member?  <NavLink exact to="/sign-in"><button className="dark-grey light-grey-text sign-in-button no-border">Sign In</button></NavLink></h3>
        </div>
        <form className="flex column col-8 hor-center space-around form-size dark-grey" onSubmit={(event) => {event.preventDefault();
          this.props.signup(JSON.stringify(this.state));
          event.target.reset()  }}>
          {/* <label className="light-grey-text label-align" htmlFor="first-name">First Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="first-name" placeholder="First Name" id="first-name"/>
          <label className="light-grey-text label-align" htmlFor="last-name">Last Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="last-name" placeholder="Last Name" id="last-name"/> */}
          <label className="light-grey-text label-align" htmlFor="user-name">User Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="email" name="username" placeholder="User Name" id="user-name" onChange={this.handleInput}/>
          <label className="light-grey-text label-align" htmlFor="password">Password</label>
          <input className="input-size hor-center light-grey form-input no-border" type="password" name="password" placeholder="Password" id="password" onChange={this.handleInput}/>
          {/* <label className="light-grey-text label-align" htmlFor="confirm-password">Confirm Password</label>
          <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="confirm-password"/> */}
          <input className="submit-button light-grey" type="submit"/>
        </form>
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signup}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp)
