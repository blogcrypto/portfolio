import C from '../constants';

export const currencySetValue = ({ value, symbol }) => {
    localStorage.setItem('currency', value);
    localStorage.setItem('currencySymbol', symbol);

    return {
        type: C.CURRENCY_SET_VALUE,
        payload: { value, symbol }
    };
};

export const currenciesListFetchDataSuccess = (data) => ({
    type: C.CURRENCIES_LIST_FETCH_DATA_SUCCESS,
    data
});

export const currenciesListLoading = (bool) => ({
    type: C.CURRENCIES_LIST_LOADING,
    bool
});

export const currenciesListError = (err) => ({
    type: C.CURRENCIES_LIST_ERROR,
    err
});
