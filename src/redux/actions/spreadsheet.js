import C from '../constants';

export const spreadsheetSetLink = (link) => ({
    type: C.SPREADSHEET_SET_LINK,
    link
});

export const spreadsheetSetDemo = (bool) => ({
    type: C.SPREADSHEET_SET_DEMO,
    bool
});

export const spreadsheetFetchData = (query) => ({
    type: C.SPREADSHEET_FETCH_DATA,
    query
});

export const spreadsheetFetchDataSuccess = (data) => ({
    type: C.SPREADSHEET_FETCH_DATA_SUCCESS,
    data
});

export const spreadsheetLoading = (bool) => ({
    type: C.SPREADSHEET_LOADING,
    bool
});

export const spreadsheetError = (err) => ({
    type: C.SPREADSHEET_ERROR,
    err
});
