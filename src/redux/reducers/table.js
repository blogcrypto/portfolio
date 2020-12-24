import C from '../constants';
import { sortTableRows } from '../../utils/calculations';

export const initialState = {
    sortBy: !localStorage.getItem('sortBy') ? 'label' : localStorage.getItem('sortBy'),
    sortOrder: !localStorage.getItem('sortOrder') ? 'desc' : localStorage.getItem('sortOrder'),
    groupOpen: !localStorage.getItem('groupOpen') ? [] : JSON.parse(localStorage.getItem('groupOpen')),
    columnsHidden: !localStorage.getItem('columnsHidden') ? [] : JSON.parse(localStorage.getItem('columnsHidden')),
    items: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case C.TABLE_SET_DATA: {
            return {
                ...state,
                items: action.data
            };
        }

        case C.TABLE_LOADING: {
            return {
                ...state,
                loading: action.bool
            };
        }

        case C.TABLE_SET_SORT: {
            const sort = state.sortBy === action.id ? state.sortBy : action.id;

            const order = state.sortBy !== action.id
                          ? state.sortOrder
                          : state.sortOrder === 'asc'
                            ? 'desc'
                            : 'asc';
            // const order = state.sortBy === action.id ? state.sortOrder : action.sortOrder;
            // const order = state.sortOrder === 'asc' ? 'desc' : 'asc'

            localStorage.setItem('sortOrder', order);

            return {
                ...state,
                sortBy: sort,
                sortOrder: order,
                items: sortTableRows(state.items, sort, order)
            };
        }

        case C.TABLE_SET_SORT_CLEAR: {
            return {
                ...state,
                sortBy: 'label',
                sortOrder: false,
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
