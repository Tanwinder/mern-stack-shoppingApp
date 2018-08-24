import AT from './shoppingActionType';

const getListOfItems = list => ({
	type: AT.GET_LIST_ITEMS,
	list,
});

// const getListOfItems = list => (dispatch) => {
// 	dispatch(dispatchListItems(list));
// };

export default {
	getListOfItems,
};
