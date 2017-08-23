import React, {Component} from 'react';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export default class AdjustRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  };

  componentDidMount() {
    fetch(`${PARSE_API_URL}/classes/Recipe`, {headers: PARSE_HEADERS}).then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.setState({recipes: result.results});
        console.log(this.state.recipes);
      });
    });
  };

  render() {
    let recipes = this.state.recipes.map((recipe, index) => {
      let steps = recipe.steps.map((step, index) => {
        let ingredients = step.ingredients.map((ingredient, index) => {
          return(
            <div key={index}>
              <ul>
                <li>{ingredient.quantity} {ingredient.unit} {ingredient.item}</li>
              </ul>
              
            </div>
          );
        });
        console.log(step);
        return(
          <div key={index} className="step-div">
            {ingredients}
            <h4>{step.instructions}</h4>
          </div>
        );
      });
      return(
        <div key={index}>
          <h1>Recipe: {recipe.name}</h1>
          <h4>By: {recipe.by}</h4>
          <h4>Type: {recipe.type}</h4>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Cook Temp: {recipe.cook_temp}</h4>
          <h4>Temp Type: {recipe.temp_type}</h4>
          <h4>Amount: {recipe.amount}</h4>
          <h4>Type: {recipe.amount_type}</h4>
          {steps}
          <h4>Notes: {recipe.notes}</h4>
        </div>
      );
    })
    return(
      <div className="margin-top container">
        <div className="">
          <div className="form-group">
            <label class="control-label">Makes <input className="form-control" type="text"/> Servings</label>
            <form className="">
              <div className="radio">
                <input className="" type="radio" name="measurement"/> US
              </div>
              <div className="radio">
                <input className="" type="radio" name="measurement"/> Metric
              </div>
            </form>
            <button className="btn">Adjust Recipe</button>
          </div>
        </div>
        <div>
          {recipes}
        </div>
      </div>
    );
  };
};


