import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      steps: [],
      ingredients: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
  };

  handleInput(event) {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
    console.log('value', event.target.name.value);
  };

  handleAddIngredient(event) {
    let ingredients = this.state.ingredients;
    let ingredient = {
      quantity: this.state.quantity,
      unit: this.state.unit,
      item: this.state.item
    };
    ingredients.push(ingredient);
    this.setState({ ingredients });
    console.log(this.state.ingredients);
  };

  handleAddStep(event) {
    let setps = this.state.steps;
    let step = {
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('mady', event.target.amount.value);
    let object = {
      name: event.target.name.value,
      by: event.target.by.value,
      type: event.target.type.value,
      prep_time: event.target.prepTime.value,
      cook_time: event.target.cookTime.value,
      cook_temp: event.target.cookTemp.value,
      amount: Number(event.target.amount.value),
      amount_type: event.target.amountType.value,
      temp_type: event.target.tempType.value,
      notes: event.target.notes.value,
      steps: this.state.steps
    }
    console.log(object.name);
    fetch(`${PARSE_API_URL}/classes/Recipe`, {
          method: "POST",
          body: JSON.stringify(object),
          headers: PARSE_HEADERS
        })
        .then(response => {
          console.log('new recipe added');
        })
        .catch(err => {
          console.log(err)
        });
      event.target.reset();
  };

  render() {

    let ingredientList = this.state.ingredients.map((ingredient, index) => {
      return(
        <div key={index}>
          <span>{ingredient.quantity} </span>
          <span>{ingredient.unit} </span>
          <span>{ingredient.item} </span>
          <button className="btn btn-danger" type="button">-</button>
        </div>
      )
    })


    return(
      <div className="margin-top">
        <div>
          <form className="form-group container" onSubmit={this.handleSubmit}>
            <div className="form-inline">
              <input className="form-control" type="text" name="name" placeholder="Recipe Name" id="recipe-name" onChange={this.handleInput}/>

              <input className="form-control" type="text" name="by" placeholder="Author" id="by" onChange={this.handleInput}/>

            </div>



            <div className="form-inline">
              <select className="form-control" name="type" onChange={this.handleInput}>
                <option value="" disabled selected hidden>Recipe Type</option>
                <option value="appetizer">Appetizer</option>
                <option value="entree">Entree</option>
                <option value="dessert">Dessert</option>
              </select>

              <input className="form-control" type="text" name="prepTime" placeholder="Prep Time" onChange={this.handleInput}/>

              <input className="form-control" type="text" name="cookTime" placeholder="Cook Time" onChange={this.handleInput}/>

              <input className="form-control" type="text" name="cookTemp" placeholder="Cook Temp" onChange={this.handleInput}/>

              <select className="form-control" name="tempType" onChange={this.handleInput}>
                <option value="F">F</option>
                <option value="C">C</option>
              </select>
            </div>


            <h5>This recipe will make</h5>

            <div className="form-inline">
              <input className="form-control" type="text" name="amount" placeholder="Amount" onChange={this.handleInput}/>

              <input className="form-control" type="text" name="amountType" placeholder="cookies, loaves, etc" onChange={this.handleInput}/>
            </div>



            <h2>Step </h2>

            {ingredientList}
            <div className="form-inline">
              <input className="form-control" type="number" name="quantity" placeholder="Amount" onChange={this.handleInput}/>

              <select className="form-control" name="unit" onChange={this.handleInput}>
                <option value="" disabled selected hidden>Unit</option>
                <option value="cups">Cups</option>
                <option value="tbs">Tbs</option>
                <option value="tsp">Tsp</option>
                <option value="oz">Oz</option>
                <option value="pint">Pint</option>
                <option value="quart">Quart</option>
                <option value="gallon">Gallon</option>
              </select>

              <input className="form-control" type="text" name="item" placeholder="Ingredient" onChange={this.handleInput}/>

              <button className="btn btn-primary" type="button" onClick={this.handleAddIngredient}>+</button>
            </div>


            <textarea className="form-control" type="text" name="instructions" placeholder="What directions go with this step?" id="instructions" onChange={this.handleInput}/>

            <button className="btn btn-primary" type="button">Add another step</button>

            <h2>Personal Notes</h2>

            <label htmlFor="notes">Personal Notes</label>
            <textarea className="form-control" type="text" name="notes" id="notes" onChange={this.handleInput}/>
            <input className="btn btn-primary" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};
