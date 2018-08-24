import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import ShoppingApp from './containers/ShoppingApp';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" name={ShoppingApp} component={ShoppingApp} />
        <Redirect to={Page404} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
