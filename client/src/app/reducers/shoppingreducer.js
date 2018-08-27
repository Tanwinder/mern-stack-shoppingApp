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
		};
	case AT.DELETE_LIST_ITEMS:
		return {
			...state,
			items: state.items.filter( ac => ac.id != action.id),
		}
	default:
		return state
	}
}

export default ShoppingReducer;
