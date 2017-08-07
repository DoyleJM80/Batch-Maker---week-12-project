import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Login from './components/Login';
import Home from './components/Home';

import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
