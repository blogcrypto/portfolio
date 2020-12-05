import C from '../constants';

export const initialState = {
    value: localStorage.getItem('currency') || 'usd',
    symbol: localStorage.getItem('currencySymbol') || '$',
    items: [],
    loading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.CURRENCY_SET_VALUE: {
            return {
                ...state,
                value: action.payload.value,
                symbol: action.payload.symbol
            };
        }

        case C.CURRENCIES_LIST_FETCH_DATA_SUCCESS: {
            return {
                ...state,
                items: action.data,
                error: ''
            };
        }

        case C.CURRENCIES_LIST_LOADING: {
            return {
                ...state,
                loading: action.bool
            };
        }

        case C.CURRENCIES_LIST_ERROR: {
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
