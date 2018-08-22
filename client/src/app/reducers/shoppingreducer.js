const initialState = {
	list: [],
};

function ShoppingReducer(state = initialState, action) {
	switch (action.type) {
	case 'list': {
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
