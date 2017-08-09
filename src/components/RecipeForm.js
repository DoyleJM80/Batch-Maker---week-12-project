import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {PARSE_API_URL, PARSE_HEADERS} from '../utility/parse';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
    //   name: '',
    //   by: '',
    //   type:'',
    //   prep_time: '',
    //   cook_time: '',
    //   cook_temp: '',
    //   amount: 0,
    //   amount_tpye: '',
    //   steps: []
      steps: [
        {
          ingredients: [
            {
              amount: 0,
              unit: '',
              name: ''
            }
          ],
          directions: ''
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(event) {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
  };


  handleSubmit(event) {
    event.preventDefault();
    console.log('mady', event.target.amount.value);
    let object = {
      name: event.target.name.value,
      by: event.target.by.value,
      prep_time: event.target.prepTime.value,
      cook_time: event.target.cookTime.value,
      cook_temp: event.target.cookTemp.value,
      amount: Number(event.target.amount.value),
      amount_type: event.target.amountType.value
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
    return(
      <div className="margin-top">
        <div>
          <form className="flex column col-8 hor-center space-around dark-grey" onSubmit={this.handleSubmit}>
            <input className="input-size hor-center light-grey form-input no-border" type="text" name="name" placeholder="Recipe Name" id="recipe-name" onChange={this.handleInput}/>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="by" placeholder="User Name" id="by" onChange={this.handleInput}/>

            <select className="input-size hor-center light-grey form-input no-border margin-5" onChange={this.handleInput}>
              <option value="" disabled selected hidden>Recipe Type</option>
              <option value="appetizer">Appetizer</option>
              <option value="entree">Entree</option>
              <option value="dessert">Dessert</option>
            </select>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="prepTime" placeholder="Prep Time" onChange={this.handleInput}/>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="cookTime" placeholder="Cook Time" onChange={this.handleInput}/>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="cookTemp" placeholder="Cook Temp" onChange={this.handleInput}/>

            <select className="input-size hor-center light-grey form-input no-border margin-5" onChange={this.handleInput}>
              <option value="F">F</option>
              <option value="C">C</option>
            </select>

            <h5>This recipe will make</h5>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="amount" placeholder="Amount" onChange={this.handleInput}/>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="amountType" placeholder="cookies, loaves, etc" onChange={this.handleInput}/>


            <h2>Step </h2>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="quantity" placeholder="Amount" onChange={this.handleInput}/>

            <select className="input-size hor-center light-grey form-input no-border margin-5" onChange={this.handleInput}>
              <option value="" disabled selected hidden>Unit</option>
              <option value="cups">Cups</option>
              <option value="tbs">Tbs</option>
              <option value="tsp">Tsp</option>
              <option value="oz">Oz</option>
              <option value="pint">Pint</option>
              <option value="quart">Quart</option>
              <option value="gallon">Gallon</option>
            </select>

            <input className="input-size hor-center light-grey form-input no-border margin-5" type="text" name="ingredient" placeholder="Ingredient" onChange={this.handleInput}/>

            <button className="submit-button light-grey">+</button>

            <textarea className="textarea-size hor-center light-grey form-input no-border margin-5" type="text" name="confirm-password" placeholder="What directions go with this step?" id="instructions" onChange={this.handleInput}/>

            <button className="submit-button light-grey">Add anoter step</button>

            <h2>Personal Notes</h2>

            <label htmlFor="notes">Personal Notes</label>
            <textarea className="textarea-size hor-center light-grey form-input no-border margin-5" type="text" name="notes" id="notes" onChange={this.handleInput}/>
            <input className="submit-button light-grey margin-5" type="submit"/>
          </form>
        </div>
      </div>
    );
  };
};
