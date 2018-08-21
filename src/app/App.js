import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShoppingApp from './containers/ShoppingApp';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" name={ShoppingApp} component={ShoppingApp} />
    </Switch>
  </BrowserRouter>
);

export default App;
