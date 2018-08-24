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
import NotFound from './components/NotFound/NotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" name={ShoppingApp} component={ShoppingApp} />
        <Route path="/notfound" name={NotFound} component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
