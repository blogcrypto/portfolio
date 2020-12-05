import C from '../constants';

export const initialState = {
    items: [],
    loading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.MARKET_FETCH_DATA_SUCCESS: {
            return {
                ...state,
                items: action.data,
                error: ''
            };
        }

        case C.MARKET_LOADING: {
            return {
                ...state,
                loading: action.bool
            };
        }

        case C.MARKET_ERROR: {
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
