import { combineReducers } from 'redux';
import items from './shoppingreducer';

const AllReducers = combineReducers({
	items,
});

export default AllReducers;
