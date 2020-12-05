import C from '../constants';

export const marketFetchData = (spreadsheet, currency) => ({
    type: C.MARKET_FETCH_DATA,
    payload: { spreadsheet, currency }
});

export const marketFetchDataSuccess = (data) => ({
    type: C.MARKET_FETCH_DATA_SUCCESS,
    data
});

export const marketLoading = (bool) => ({
    type: C.MARKET_LOADING,
    bool
});

export const marketError = (err) => ({
    type: C.MARKET_ERROR,
    err
});
