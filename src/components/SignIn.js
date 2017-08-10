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

  componentWillMount(){
    if(localStorage.getItem('user')) {
      this.props.history.push('/recipes');
    }
  };

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
          <div>
            <h3 className="col-8 hor-center dark-grey light-grey-text">Not a member?  <NavLink exact to="/sign-up"><button className="btn">Sign Up</button></NavLink></h3>
          </div>
          <form className="flex column col-8 hor-center space-around form-size dark-grey" onSubmit={(event) => {event.preventDefault(); this.props.signin(this.state); event.target.reset()}}>
            <label className="control-label" htmlFor="u-name">User Name</label>
            <input className="form-control" type="email" name="username" placeholder="User Name" id="u-name" onChange={this.handleInput}/>
            <label className="control-label" htmlFor="p-word">Password</label>
            <input className="form-control" type="password" name="password" placeholder="Password" id="p-word" onChange={this.handleInput}/>
            {/* <label className="light-grey-text label-align" htmlFor="conf-password">Confirm Password</label>
            <input className="input-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="conf-password"/> */}
            <input className="btn" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
