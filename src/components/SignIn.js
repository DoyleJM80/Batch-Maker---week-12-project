import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signin} from '../actions/index';
import {bindActionCreators} from 'redux';

class SignIn extends Component {
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
          <div>
            <h3 className="col-8 hor-center dark-grey light-grey-text">Not a member?  <NavLink exact to="/sign-up"><button className="dark-grey light-grey-text sign-in-button no-border">Sign Up</button></NavLink></h3>
          </div>
          <form className="flex column col-8 hor-center space-around form-size dark-grey" onSubmit={(event) => {event.preventDefault(); this.props.signin(this.state); event.target.reset()}}>
            <label className="light-grey-text label-align" htmlFor="u-name">User Name</label>
            <input className="input-size hor-center light-grey form-input no-border" type="email" name="username" placeholder="User Name" id="u-name" onChange={this.handleInput}/>
            <label className="light-grey-text label-align" htmlFor="p-word">Password</label>
            <input className="input-size hor-center light-grey form-input no-border" type="password" name="password" placeholder="Password" id="p-word" onChange={this.handleInput}/>
            {/* <label className="light-grey-text label-align" htmlFor="conf-password">Confirm Password</label>
            <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="conf-password"/> */}
            <input className="submit-button light-grey" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signin}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn)
