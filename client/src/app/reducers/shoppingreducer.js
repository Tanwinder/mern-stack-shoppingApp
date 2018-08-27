import AT from '../actions/shoppingActionType';

const initialState = {
	items: [],
	adding: false,
	err: null
};

const ShoppingReducer = (state = initialState, action) => {
	switch (action.type) {
	case AT.GET_LIST_ITEMS:
		return {
			...state,
			items: action.items
		}
	case AT.GET_LIST_ITEMS_ERROR:
		return {
			...state,
			err: action.err
		}
	case AT.ADD_ITEM_START:
		return {
			...state,
			adding: true,
		};
	case AT.ADD_ITEM:
		return {
			...state,
			items: [action.item, ...state.items],
			adding: false,
		};
	case AT.ADD_ITEM_ERROR:
		return {
			...state,
			err: action.err
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
