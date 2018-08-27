import { combineReducers } from 'redux';
import shoppingReducer from './shoppingreducer';

const AllReducers = combineReducers({
	shopping: shoppingReducer,
});

export default AllReducers;
