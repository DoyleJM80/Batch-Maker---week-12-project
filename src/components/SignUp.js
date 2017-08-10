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

  componentWillMount(){
    this.props.authenticated ? this.props.history.push('/home') : null
  }

 componentWillReceiveProps(nextProps) {
    nextProps.authenticated ? this.props.history.push('/home') : null
  }

  render() {
    return(
      <div className="margin-top">
        <div>
          <h3 className="col-8 hor-center  dark-grey light-grey-text">Already a member?  <NavLink exact to="/sign-in"><button className="btn">Sign In</button></NavLink></h3>
        </div>
        <form className="flex column col-8 hor-center space-around form-size dark-grey" onSubmit={(event) => {event.preventDefault();
          this.props.signup(JSON.stringify(this.state));
          event.target.reset()  }}>
          {/* <label className="light-grey-text label-align" htmlFor="first-name">First Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="first-name" placeholder="First Name" id="first-name"/>
          <label className="light-grey-text label-align" htmlFor="last-name">Last Name</label>
          <input className="input-size hor-center light-grey form-input no-border" type="text" name="last-name" placeholder="Last Name" id="last-name"/> */}
          <label className="control-label" htmlFor="user-name">User Name</label>
          <input className="form-control" type="email" name="username" placeholder="User Name" id="user-name" onChange={this.handleInput}/>
          <label className="control-label" htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password" placeholder="Password" id="password" onChange={this.handleInput}/>
          {/* <label className="light-grey-text label-align" htmlFor="confirm-password">Confirm Password</label>
          <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="confirm-password"/> */}
          <input className="btn" type="submit"/>
        </form>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signup}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
