import C from '../constants';

export const initialState = {
    items: [],
    isDemo: false,
    link: localStorage.getItem('spreadsheetLink') || '',
    loading: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.SPREADSHEET_SET_LINK: {
            return {
                ...state,
                link: action.link
            };
        }

        case C.SPREADSHEET_SET_DEMO: {
            return {
                ...state,
                isDemo: action.bool
            };
        }

        case C.SPREADSHEET_FETCH_DATA_SUCCESS: {
            return {
                ...state,
                items: action.data,
                error: ''
            };
        }

        case C.SPREADSHEET_LOADING: {
            return {
                ...state,
                loading: action.bool
            };
        }

        case C.SPREADSHEET_ERROR: {
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
