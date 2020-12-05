import C from '../constants';
import { compileTableData, sortTableRows } from '../../utils/calculations';

export const tableSetData = (extData, marketItems, currency, sortBy, sortDesc) => ({
    type: C.TABLE_SET_DATA,
    data: sortTableRows(compileTableData(extData, marketItems, currency, sortBy, sortDesc), sortBy, sortDesc)
});

export const tableSetSort = (id) => {
    localStorage.setItem('sortBy', id);

    return {
        type: C.TABLE_SET_SORT,
        id
    };
};

export const tableSetSortClear = () => {
    localStorage.removeItem('sortBy');

    return {
        type: C.TABLE_SET_SORT_CLEAR
    };
};

export const tableGroupOpen = (id) => ({
    type: C.TABLE_GROUP_OPEN,
    id
});

export const tableGroupOpenClear = () => {
    localStorage.removeItem('groupOpen');

    return {
        type: C.TABLE_GROUP_OPEN_CLEAR
    };
};

export const tableGroupOpenAll = (bool) => ({
    type: C.TABLE_GROUP_OPEN_ALL,
    bool
});

export const tableColumnsHidden = (id) => ({
    type: C.TABLE_COLUMNS_HIDDEN,
    id
});
