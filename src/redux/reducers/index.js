import { combineReducers } from 'redux';
import app from './app';
import coins from './coins';
import currency from './currency';
import spreadsheet from './spreadsheet';
import market from './market';
import table from './table';

export const rootReducer = combineReducers({
    app,
    coins,
    currency,
    spreadsheet,
    market,
    table
});
