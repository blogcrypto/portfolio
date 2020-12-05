import C from '../constants';
import { sortTableRows } from '../../utils/calculations';

export const initialState = {
    sortBy: !localStorage.getItem('sortBy') ? 'label' : localStorage.getItem('sortBy'),
    sortDesc: !localStorage.getItem('sortDesc') ? false : localStorage.getItem('sortDesc'),
    groupOpen: !localStorage.getItem('groupOpen') ? [] : JSON.parse(localStorage.getItem('groupOpen')),
    columnsHidden: !localStorage.getItem('columnsHidden') ? [] : JSON.parse(localStorage.getItem('columnsHidden')),
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.TABLE_SET_DATA: {
            return {
                ...state,
                items: action.data
            };
        }

        case C.TABLE_SET_SORT: {
            const sort = state.sortBy === action.id ? state.sortBy : action.id;
            const desc = state.sortBy !== action.id ? state.sortDesc : !state.sortDesc;

            localStorage.setItem('sortDesc', desc);

            return {
                ...state,
                sortBy: sort,
                sortDesc: desc,
                items: sortTableRows(state.items, sort, desc)
            };
        }

        case C.TABLE_SET_SORT_CLEAR: {
            return {
                ...state,
                sortBy: 'label',
                sortDesc: false,
                items: sortTableRows(state.items, 'label', false)
            };
        }

        case C.TABLE_GROUP_OPEN: {
            return {
                ...state,
                groupOpen: state.groupOpen.find((id) => id === action.id)
                    ? state.groupOpen.filter((item) => item !== action.id)
                    : state.groupOpen.concat(action.id)
            };
        }

        case C.TABLE_GROUP_OPEN_ALL: {
            return {
                ...state,
                groupOpen: action.bool ? [] : state.items.filter((item) => item.group).map((item) => item.title)
            };
        }

        case C.TABLE_GROUP_OPEN_CLEAR: {
            return {
                ...state,
                groupOpen: []
            };
        }

        case C.TABLE_COLUMNS_HIDDEN: {
            return {
                ...state,
                columnsHidden: state.columnsHidden.find((id) => id === action.id)
                    ? state.columnsHidden.filter((item) => item !== action.id)
                    : state.columnsHidden.concat(action.id)
            };
        }

        default:
            return state;
    }
};

export default reducer;
