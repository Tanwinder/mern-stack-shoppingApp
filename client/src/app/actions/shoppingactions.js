import AT from './shoppingActionType';

export const getListOfItems = list => ({
	type: AT.GET_LIST_ITEMS,
	list,
});

// const getListOfItems = list => (dispatch) => {
// 	dispatch(dispatchListItems(list));
// };

export const AddItems = (item) => {
	console.log('item ac ',item);
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
