import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class RecipeForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      by: '',
      type:'',
      prep_time: '',
      cook_time: '',
      cook_temp: '',
      amount: 0,
      amount_tpye: '',
      steps: []
    }
    this.handleChange = this.handleChange.bind(this);
  };


  handleChange(event) {
    
  };

  render() {
    return(
      <div className="margin-top">
        <div>
          <form className="flex column col-8 hor-center space-around dark-grey">
            <input className="input-size hor-center light-grey form-input no-border" type="text" name="recipe-name" placeholder="Recipe Name" id="recipe-name"/>

            <input className="input-size hor-center light-grey form-input no-border" type="text" name="by" placeholder="User Name" id="by"/>

            <select>
              <option value="" disabled selected hidden>Recipe Type</option>
              <option value="appetizer">Appetizer</option>
              <option value="entree">Entree</option>
              <option value="dessert">Dessert</option>
            </select>

            <input type="text" name="prep-time" placeholder="Prep Time"/>

            <input type="text" name="cook-time" placeholder="Cook Time"/>

            <input type="text" name="cook-temp" placeholder="Cook Temp"/>

            <select>
              <option value="F">F</option>
              <option value="C">C</option>
            </select>

            <h5>This recipe will make</h5>

            <input type="text" name="amount" placeholder="Amount"/>

            <input type="text" name="amount-type" placeholder="cookies, loaves, etc"/>


            <h2>Step </h2>

            <input type="text" name="amount" placeholder="Amount"/>

            <select>
              <option value="" disabled selected hidden>Unit</option>
              <option value="cups">Cups</option>
              <option value="tbs">Tbs</option>
              <option value="tsp">Tsp</option>
              <option value="oz">Oz</option>
              <option value="pint">Pint</option>
              <option value="quart">Quart</option>
              <option value="gallon">Gallon</option>
            </select>

            <input type="text" name="ingredient" placeholder="Ingredient"/>

            <button>+</button>

            <textarea className="textarea-size hor-center light-grey form-input no-border" type="text" name="confirm-password" placeholder="What directions go with this step?" id="instructions"/>

            <button>Add anoter step</button>

            <h2>Personal Notes</h2>

            <label htmlFor="notes">Personal Notes</label>
            <textarea className="textarea-size hor-center light-grey form-input no-border" type="text" name="notes" id="notes"/>
          </form>
        </div>
      </div>
    );
  };
};
