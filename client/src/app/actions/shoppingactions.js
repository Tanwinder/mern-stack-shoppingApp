import axios from 'axios';
import AT from './shoppingActionType';

const add_item_url = process.env.NODE_ENV === 'production' ? "/api/items" : "http://localhost:5000/api/items";

const AddItemStart = () => {
	return {
		type: AT.ADD_ITEM_START,
	}
} 

export const getListOfItems = () => {
	return dispatch => {
		axios.get(add_item_url)
			.then(res => {
				dispatch({
					type: AT.GET_LIST_ITEMS,
					items: res
				})
			})
			.catch(err => {
				dispatch({
					type:AT.GET_LIST_ITEMS_ERROR,
					err: err
				})
			})
	}
}

export const AddItems = (item) => {
	console.log('item ',item);
	// return dispatch => {
	// 	dispatch(AddItemStart());
	// 	axios.post(add_item_url,item)
	// 		.then(res => {
	// 			dispatch({
	// 				type: AT.ADD_ITEM,
	// 				item: item,
	// 			})
	// 		})
	// 		.catch(err => {
	// 			dispatch({
	// 				type: AT.ADD_ITEM_ERROR,
	// 				err: err,
	// 			})
	// 		})
	// }
	return {
		type: AT.ADD_ITEM,
		item: item,
	}
}

export const deleteItem = (id) => {
	return {
		type: AT.DELETE_LIST_ITEMS,
		id: id,
	}
}

// export const SaveItems = () => {
	
// }
