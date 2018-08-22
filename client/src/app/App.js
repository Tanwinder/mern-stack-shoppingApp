import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import ShoppingApp from './containers/ShoppingApp';
import AllReducers from './reducers';

// const middleware = [thunk];

// if(process.env.NODE_ENV !== 'production'){
//   middleware.push(createLogger());
// }

const store = createStore(
	AllReducers,
	applyMiddleware(thunk),
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" name={ShoppingApp} component={ShoppingApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
