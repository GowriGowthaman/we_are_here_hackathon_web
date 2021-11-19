import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { commonSlice } from 'store/reducers/commonSlice';
import { searchDataSlice } from 'store/reducers/searchDataSlice';
import { searchDataTypes } from 'types/store/searchData';
import { apiCall } from 'utils/helpers/apiCall';
import { apiRoutes } from 'utils/helpers/apiRoutes';
import { getApiErrorMessage } from 'utils/helpers/commonFunc';

import { SEARCH_DATA_SAGA } from '../actions/searchData';

const { searchDataStart, searchDataFailed, searchDataSuccess } = searchDataSlice.actions;
const { exceptionHandlerRequest } = commonSlice.actions;

const searchDataSaga = function* (payloadData: PayloadAction<searchDataTypes.ISearchDataForm>): any {
    yield put(searchDataStart(payloadData.payload));
    const cancelSource = axios.CancelToken.source();
    try {
        const data = {
            km: payloadData.payload.km,
            search: payloadData.payload.search,
            lat: payloadData.payload.lat,
            lang: payloadData.payload.lang
        };
        const response = yield apiCall({ cancelToken: cancelSource.token, data, ...apiRoutes.searchData });
        if (response.status === 200) {
            yield put(searchDataSuccess(response.data));
        } else {
            const errorData = {
                status: false,
                error: getApiErrorMessage(response)
            };
            yield put(searchDataFailed(errorData));
        }
    } catch (error) {
        yield put(exceptionHandlerRequest(error));
    } finally {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
        }
    }
};

export const takeSearchDataRequest = function* () {
    yield takeEvery(SEARCH_DATA_SAGA, searchDataSaga);
};
