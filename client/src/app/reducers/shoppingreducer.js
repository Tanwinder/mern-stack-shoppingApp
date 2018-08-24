import AT from '../actions/shoppingActionType';

const initialState = {
	list: [],
};

function ShoppingReducer(state = initialState, action) {
	switch (action.type) {
	case AT.GET_LIST_ITEMS: {
		return {
			...state,
			list: action.list,
		};
	}
	default: {
		return {
			state,
		};
	}
	}
}

export default ShoppingReducer;
