import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AllReducers from './reducers/index';

const middleWare = [];

middleWare.push(thunk);

const loggerMiddleware = createLogger({
	predicate: () => process.env.NODE_ENV !== 'production',
});
middleWare.push(loggerMiddleware);

const store = createStore(
	AllReducers,
	{},
	compose(
		applyMiddleware(...middleWare),
	),
);

export default store;
