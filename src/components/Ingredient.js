import React, {Component} from 'react';

export default class Ingredient extends Component {
  constructor() {
    super();
  };

  render() {
    console.log(this.props);
    return(
      <div className="ingredient-div">
        <span>{this.props.ingredient.quantity} </span>
        <span>{this.props.ingredient.unit} </span>
        <span>{this.props.ingredient.item} </span>
        <button className="btn btn-danger" type="button" onClick={()=>this.props.handleRemoveIngredient(this.props.index)}>-</button>
      </div>
    );
  };
};
