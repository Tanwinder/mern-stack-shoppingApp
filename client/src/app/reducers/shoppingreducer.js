import AT from '../actions/shoppingActionType';

const initialState = {
	items: [],
};

const ShoppingReducer = (state = initialState, action) => {
	switch (action.type) {
	case AT.ADD_ITEM:
		return {
			...state,
			items: [action.item, ...state.items]
		}
	default:
		return state
	}
}

export default ShoppingReducer;
