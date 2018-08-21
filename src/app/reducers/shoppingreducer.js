const initialState = {
    list: []
};

export default function( state = initialState, action) {
    switch(action.type) {
        case "list": {
            return {
                ...state,
                list: action.list
            }
        }
        default: {
            return {
                state
            }
        }
    }
}