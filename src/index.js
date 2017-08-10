import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import AdjustRecipe from './components/AdjustRecipe';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import RecipeForm from './components/RecipeForm';
import Thunk from 'redux-thunk';
import requireAuth from './components/RequireAuth';

import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({type: 'AUTH_USER'})
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/home" component={requireAuth(Home)}/>
          <Route path="/adjust-recipe" component={requireAuth(AdjustRecipe)}/>
          <Route path="/add-recipe" component={requireAuth(RecipeForm)}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
