import React, {Component} from 'react';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export default class AdjustRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipes: {
        steps: []
      },
    };
  };

  componentDidMount() {
    fetch(`${PARSE_API_URL}/classes/Recipe`, {headers: PARSE_HEADERS}).then((result) => {
      result.json().then((response) => {
        let targetRecipe = response.results.find((item) => {
          return item.objectId === this.props.match.params.id;
        });
        this.setState({recipes: targetRecipe});
      });
    });
  };




  render() {
    
    let steps = this.state.recipes.steps.map((step, index) => {
      let ingredients = step.ingredients.map((ingredient, index) => {
        return(
          <div key={index}>
            <ul>
              <li>{ingredient.quantity} {ingredient.unit} {ingredient.item}</li>
            </ul>
          </div>
        );
      });
      return(
        <div key={index} className="step-div">
          {ingredients}
          <h4>{step.instructions}</h4>
        </div>
      );
    });
    
    return(
      <div className="margin-top container">
        <div className="">
          <div className="form-group">
            <label className="control-label">Makes <input className="form-control" type="text"/> Servings</label>
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
          <h1>Recipe: {this.state.recipes.name}</h1>
          <h4>By: {this.state.recipes.by}</h4>
          <h4>Type: {this.state.recipes.type}</h4>
          <h4>Prep Time: {this.state.recipes.prep_time}</h4>
          <h4>Cook Time: {this.state.recipes.cook_time}</h4>
          <h4>Cook Temp: {this.state.recipes.cook_temp}</h4>
          <h4>Temp Type: {this.state.recipes.temp_type}</h4>
          <h4>Amount: {this.state.recipes.amount}</h4>
          <h4>Type: {this.state.recipes.amount_type}</h4>
           {steps} 
        </div>
      </div>
    );
  };
};


