import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';

import { VERIFY_SITE_CAPTCHA_SAGA } from 'store/actions/verifySiteCaptchaAction';
import { commonSlice } from 'store/reducers/commonSlice';
import { verifySiteCaptchaSlice } from 'store/reducers/verifySiteCaptchaSlice';
import { verifySiteCaptchaTypes } from 'types/store/verifySiteCaptcha';
import { apiCall } from 'utils/helpers/apiCall';
import { apiRoutes } from 'utils/helpers/apiRoutes';
import { getApiErrorMessage } from 'utils/helpers/commonFunc';

const { verifySiteCaptchaStart, verifySiteCaptchaFailed, verifySiteCaptchaSuccess } = verifySiteCaptchaSlice.actions;
const { exceptionHandlerRequest } = commonSlice.actions;

const verifySiteCaptchaSaga = function* (
    payloadData: PayloadAction<verifySiteCaptchaTypes.IVerifySiteCaptchaForm>
): any {
    yield put(verifySiteCaptchaStart(payloadData.payload));
    try {
        const data = {
            key: payloadData.payload.key,
            gCapResponse: payloadData.payload.gCapResponse
        };
        const response = yield apiCall({ data, ...apiRoutes.verifySiteCaptcha });
        if (response.status === 200) {
            yield put(verifySiteCaptchaSuccess(response.data));
        } else {
            const errorData = {
                status: false,
                error: getApiErrorMessage(response)
            };
            yield put(verifySiteCaptchaFailed(errorData));
        }
    } catch (error) {
        yield put(exceptionHandlerRequest(error));
    }
};

export const takeVerifySiteCaptchaRequest = function* () {
    yield takeEvery(VERIFY_SITE_CAPTCHA_SAGA, verifySiteCaptchaSaga);
};
