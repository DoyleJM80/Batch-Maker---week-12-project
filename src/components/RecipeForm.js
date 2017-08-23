import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';
import Ingredient from './Ingredient';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      quantity: "Amount",
      unit: "unit",
      item: "Ingredient",
      steps: [],
      ingredients: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
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
    this.setState({ ingredients, quantity: 'Amount', unit: 'Unit', item: 'Ingredient' });
    console.log(this.state.ingredients);
  };

  handleRemoveIngredient(index) {
      let ingredients = this.state.ingredients;
      // ingredients[index]
      ingredients.splice(index, 1);
      this.setState({ingredients})
  };

  handleAddStep(event) {
    let steps = this.state.steps;
    let step = {
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    }
    steps.push(step);
    this.setState({steps, ingredients: []});
    console.log(this.state.steps);
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
      this.setState({
        steps: []
      })
  };

  render() {

    let ingredientList = this.state.ingredients.map((ingredient, index) => {
      return <Ingredient key={index} index={index} ingredient={ingredient} handleRemoveIngredient={this.handleRemoveIngredient}/>;
    });

    let allSteps = this.state.steps.map((step, index) => {
      let stepIngredients = step.ingredients.map((stepIngredient, index) => {
        return(
          <div key={index} className="ingredient-div">
            <ul>
              <li>{stepIngredient.quantity} {stepIngredient.unit} {stepIngredient.item}</li>
            </ul>
          </div>
        );
      });
      return(
        <div key={index} className="step-div">
          {stepIngredients}
          <p>{step.instructions}</p>
        </div>
      );
    });


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
                <option value="" disabled hidden>Recipe Type</option>
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
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="Boil">Boil</option>
                <option value="Simmer">Simmer</option>
              </select>
            </div>


            <h5>This recipe will make</h5>

            <div className="form-inline">
              <input className="form-control" type="text" name="amount" placeholder="Amount" onChange={this.handleInput}/>

              <input className="form-control" type="text" name="amountType" placeholder="cookies, loaves, etc" onChange={this.handleInput}/>
            </div>


            {allSteps}
            <h2>Step </h2>

            {ingredientList}
            <div className="form-inline">
              <input className="form-control" type="number" name="quantity" placeholder="Amount" onChange={this.handleInput}/>

              <select className="form-control" name="unit" onChange={this.handleInput} defaultValue="Unit">
                <option value="" hidden>Unit</option>
                <option value="cups(s)">Cups(s)</option>
                <option value="tbs(s)">Tbs(s)</option>
                <option value="tsp(s)">Tsp(s)</option>
                <option value="oz(s)">Oz(s)</option>
                <option value="pint(s)">Pint(s)</option>
                <option value="quart(s)">Quart(s)</option>
                <option value="Gallon(s)">Gallon(s)</option>
                <option value="Slice(s)">Slice(s)</option>
                <option value="Whole">Whole</option>
                <option value="Half">Half</option>
                <option value="Quarter">Quarter</option>
                <option value="Third">Third</option>
                <option value="Clove(s)">Clove(s)</option>
              </select>

              <input className="form-control" type="text" name="item" placeholder="Ingredient" onChange={this.handleInput}/>

              <button className="btn btn-primary" type="button" onClick={this.handleAddIngredient}>+</button>
            </div>


            <textarea className="form-control" type="text" name="instructions" placeholder="What directions go with this step?" id="instructions" onChange={this.handleInput}/>

            <button className="btn btn-primary" type="button" onClick={this.handleAddStep}>Add another step</button>

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
