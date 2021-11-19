import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { commonApiTypes } from 'types/common';
import { verifySiteCaptchaTypes } from 'types/store/verifySiteCaptcha';

const verifySiteCaptchaState: verifySiteCaptchaTypes.IVerifySiteCaptcha = {
    // Form
    gCapResponse: '',
    key: null,

    // Reducer
    isLoading: false,

    // Response
    success: false,
    token: '',
    response: null,

    // Fail Response
    error: '',
    errorCode: null,
    errors: [],
    status: false
};

const verifySiteCaptchaSlice = createSlice({
    name: 'verifySiteCaptcha',
    initialState: verifySiteCaptchaState,
    reducers: {
        verifySiteCaptchaStart: (state, action: PayloadAction<verifySiteCaptchaTypes.IVerifySiteCaptchaForm>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: true
            };
        },
        verifySiteCaptchaSuccess: (state, action: PayloadAction<verifySiteCaptchaTypes.IVerifySiteCaptchaResponse>) => {
            return {
                ...state,
                ...action.payload,
                response: action.payload,
                isLoading: false,
                isSuccess: true
            };
        },
        verifySiteCaptchaFailed: (state, action: PayloadAction<commonApiTypes.IApiFailed>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isSuccess: false
            };
        },
        verifySiteCaptchaReset: () => {
            return {
                ...verifySiteCaptchaState
            };
        }
    }
});

export { verifySiteCaptchaSlice };
