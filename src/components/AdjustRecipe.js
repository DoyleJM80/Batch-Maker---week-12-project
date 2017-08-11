import React, {Component} from 'react';

export default class AdjustRecipe extends Component {
  constructor() {
    super();
  };

  

  render() {
    return(
      <div className="margin-top container">
        <div className="">
          <div className="form-group">
            <label class="control-label">Makes <input className="form-control" type="text"/> Servings</label>
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
      </div>
    );
  };
};
