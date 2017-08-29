import React, {Component} from 'react';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

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
      return(
        <div>
          <ul>
            <li><a href="#">{recipe.name}</a></li>
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
