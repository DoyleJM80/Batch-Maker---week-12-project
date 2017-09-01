import React, {Component} from 'react';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';
import { Link, NavLink } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  };

  componentDidMount() {
    fetch(`${PARSE_API_URL}/classes/Recipe`, {headers: PARSE_HEADERS}).then((response) => {
      response.json().then((result) => {
        this.setState({recipes: result.results});
        console.log(this.state.recipes)
      });
    });
  };

  render() {
    let recipes = this.state.recipes.map((recipe, index) => {
      console.log('recipe', recipe);
      console.log('recipes', recipes);
      return(
        <div>
          <ul>
             <li><Link to={`/adjust-recipe/${recipe.objectId}`}>{recipe.name}</Link></li> 
          </ul>
        </div>
      )
    })
    return(
      <div className="margin-top">
        <h1>Recipes</h1>
        {recipes}
      </div>
    );
  };
};
