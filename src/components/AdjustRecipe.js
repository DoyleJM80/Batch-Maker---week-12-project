import React, {Component} from 'react';

export default class AdjustRecipe extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div>
        <div className="flex space-around">
          <h3>Makes <input type="text"/> Servings</h3>
          <form>
            <input type="radio" name="measurement"/> US
            <input type="radio" name="measurement"/> Metric
          </form>
          <button>Adjust Recipe</button>
        </div>

      </div>
    );
  };
};
