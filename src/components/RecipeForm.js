import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class RecipeForm extends Component {
  constructor() {
    super();
  };
  render() {
    return(
      <div className="margin-top">
        <div>
          <form className="flex column col-8 hor-center space-around form-size dark-grey">
            <label className="light-grey-text label-align" htmlFor="recipe-name">Recipe Name</label>
            <input className="input-size hor-center light-grey form-input no-border" type="text" name="recipe-name" placeholder="Recipe Name" id="recipe-name"/>
            <label className="light-grey-text label-align" htmlFor="ingredients">Ingredients</label>
            <input className="input-size hor-center light-grey form-input no-border" type="text" name="ingredients" placeholder="Ingredients" id="ingredients"/>
            <label className="light-grey-text label-align" htmlFor="instructions">Instructions</label>
            <textarea className="textarea-size hor-center light-grey form-input no-border" type="password" name="confirm-password" placeholder="Confirm Password" id="instructions"/>
            <input className="submit-button light-grey" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};
