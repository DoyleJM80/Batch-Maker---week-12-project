import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Header extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <nav className="form-inline fixed-top banner">
        <h2 className="col-lg-4 text-center">The kitchen is yours, Chef!</h2>
        <h2 className="col-lg-4 text-center">Batch Maker</h2>
        <div className="col-lg-4 text-center">
          <NavLink exact to="/Home"><button className="btn btn-primary">Home</button></NavLink>
          <NavLink exact to="/adjust-recipe"><button className="btn btn-primary">Adjust</button></NavLink>
          <NavLink exact to="/add-recipe"><button className="btn btn-primary">Add Recipe</button></NavLink>
        </div>
      </nav>
    );
  };
};
