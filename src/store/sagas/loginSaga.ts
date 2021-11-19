import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';

import { AUTH_LOGIN_SAGA } from 'store/actions/authData';
import { commonSlice } from 'store/reducers/commonSlice';
import { loginSlice } from 'store/reducers/loginSlice';
import { loginTypes } from 'types/store/auth';
import { apiCall } from 'utils/helpers/apiCall';
import { apiRoutes } from 'utils/helpers/apiRoutes';
import { getApiErrorMessage } from 'utils/helpers/commonFunc';

const { loginStart, loginFailed, loginSuccess } = loginSlice.actions;
const { exceptionHandlerRequest } = commonSlice.actions;

const loginSaga = function* (payloadData: PayloadAction<loginTypes.ILoginForm>): any {
    yield put(loginStart(payloadData.payload));

    try {
        const data = {
            name: payloadData.payload.name,
            email: payloadData.payload.email,
            password: payloadData.payload.password,
            mobileNumber: payloadData.payload.mobileNumber
        };
        const response = yield apiCall({ data, ...apiRoutes.login });
        if (response.status === 200) {
            yield put(loginSuccess(response.data));
        } else {
            const errorData = {
                status: false,
                error: getApiErrorMessage(response)
            };
            yield put(loginFailed(errorData));
        }
    } catch (error) {
        yield put(exceptionHandlerRequest(error));
    }
};

export const takeLoginRequest = function* () {
    yield takeEvery(AUTH_LOGIN_SAGA, loginSaga);
};
