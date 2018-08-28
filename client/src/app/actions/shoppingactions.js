import axios from 'axios';
import AT from './shoppingActionType';

const add_item_url = process.env.NODE_ENV === 'production' ? "/api/items" : "http://localhost:5000/api/items/";

const AddItemStart = () => {
	return {
		type: AT.ADD_ITEM_START,
	}
} 

export const getListOfItems = () => {
	return dispatch => {
		axios
			.get(add_item_url)
			.then(res => {
				console.log('rexs',res.data);
				dispatch({
					type: AT.GET_LIST_ITEMS,
					items: res.data
				})
			})
			.catch(err => {
				console.log('err ',err);
				dispatch({
					type:AT.GET_LIST_ITEMS_ERROR,
					err: err
				})
			})
	}
}

export const AddItems = (item) => {
	console.log('item ',item);
	return dispatch => {
		dispatch(AddItemStart());
		axios.post(add_item_url,item)
			.then(res => {
				dispatch({
					type: AT.ADD_ITEM,
					item: res.data,
				})
			})
			.catch(err => {
				dispatch({
					type: AT.ADD_ITEM_ERROR,
					err: err,
				})
			})
	}
}

export const deleteItem = (id) => {
	return dispatch => {
		axios.delete(`${add_item_url}/${id}`)
			.then(res => {
				dispatch({
					type: AT.DELETE_LIST_ITEMS,
					id: id,
				})
			})
			.catch(err => {
				dispatch({
					type: AT.DELETE_LIST_ITEMS_ERROR,
					err: err,
				})
			})
	}
}

