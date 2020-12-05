import C from '../constants';

export const coinsListFetchDataSuccess = () => ({
    type: C.COINS_LIST_FETCH_DATA_SUCCESS
});

export const coinsListLoading = (bool) => ({
    type: C.COINS_LIST_LOADING,
    bool
});

export const coinsListError = (err) => ({
    type: C.COINS_LIST_ERROR,
    err
});

export const coinsSelectSetValue = (val, list) => ({
    type: C.COINS_SELECT_SET_VALUE,
    payload: { val, list }
});
