import { call, put, takeLatest } from 'redux-saga/effects';
import C from '../constants';
import { request, SPREADSHEET_API } from '../../api/api';
import { spreadsheetLoading, spreadsheetFetchDataSuccess, spreadsheetError } from '../actions/spreadsheet';
import { schemaSpreadsheet } from '../../api/schemas';

export function* fetchSpreadsheet(link) {

    yield put(spreadsheetLoading(true));

    try {
        const { data } = yield call(request, SPREADSHEET_API(link));

        if (!data.values.length) {
            yield put(spreadsheetLoading(false));

            return null;
        }

        const normalizedData = schemaSpreadsheet(data.values);

        yield put(spreadsheetFetchDataSuccess(normalizedData));
        yield put(spreadsheetLoading(false));
        return normalizedData;
    } catch (err) {
        yield put(spreadsheetError(`Spreadsheet error! ${err}`));
    }
}

export default [takeLatest(C.SPREADSHEET_FETCH_DATA, fetchSpreadsheet)];
