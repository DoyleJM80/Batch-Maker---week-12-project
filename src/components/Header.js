import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <nav>
        <p>The kitchen is yours, Chef!</p>
        <h2>Batch Maker</h2>
        <NavLink exact to="/Login"><button>Login</button></NavLink>
        <NavLink exact to="/Home"><button>Home</button></NavLink>
      </nav>
    );
  };
};
