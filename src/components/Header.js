import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <nav className="flex space-around dark-grey">
        <p className="header-p light-grey-text">The kitchen is yours, Chef!</p>
        <h2 className="light-grey-text">Batch Maker</h2>
        <div className="header-buttons">
          <NavLink exact to="/sign-in"><button>Sign In</button></NavLink>
          <NavLink exact to="/Home"><button>Home</button></NavLink>
          <NavLink exact to="/adjust-recipe"><button>Adjust</button></NavLink>
          <NavLink exact to="/sign-up"><button>Sign Up</button></NavLink>
          <NavLink exact to="/add-recipe"><button>Add Recipe</button></NavLink>
        </div>
      </nav>
    );
  };
};
