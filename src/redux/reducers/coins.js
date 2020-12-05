import C from '../constants';

export const initialState = {
    value: '',
    list: [],
    loading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.COINS_SELECT_SET_VALUE: {
            return {
                ...state,
                value: action.payload.val,
                list: action.payload.list
            };
        }

        case C.COINS_LIST_FETCH_DATA_SUCCESS: {
            return {
                ...state,
                error: ''
            };
        }

        case C.COINS_LIST_LOADING: {
            return {
                ...state,
                loading: action.bool
            };
        }

        case C.COINS_LIST_ERROR: {
            return {
                ...state,
                error: action.err,
                loading: false
            };
        }

        default:
            return state;
    }
};

export default reducer;
