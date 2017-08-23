import React, {Component} from 'react';

export default class Ingredient extends Component {
  constructor() {
    super();
  };

  render() {
    console.log(this.props);
    return(
      <div className="ingredient-div">
        <ul>
          <li>{this.props.ingredient.quantity} {this.props.ingredient.unit} {this.props.ingredient.item} <button className="btn btn-danger" type="button" onClick={()=>this.props.handleRemoveIngredient(this.props.index)}>-</button></li>
        </ul>
      </div>
    );
  };
};
