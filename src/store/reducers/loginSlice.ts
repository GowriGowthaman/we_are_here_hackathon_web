import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { commonApiTypes } from 'types/common';
import { loginTypes } from 'types/store/auth';

const loginState: loginTypes.ILogin = {
    // Form
    name: '',
    email: '',
    mobileNumber: '',
    password: '',

    // Reducer
    isLoading: false,

    // Response
    token: null,

    // Fail Response
    status: false
};

const loginSlice = createSlice({
    name: 'LoginState',
    initialState: loginState,
    reducers: {
        loginStart: (state, action: PayloadAction<loginTypes.ILoginForm>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: true
            };
        },
        loginSuccess: (state, action: PayloadAction<loginTypes.ILoginResponse>) => {
            return {
                ...state,
                ...action.payload,
                response: action.payload,
                isLoading: false,
                isLoginSuccess: true
            };
        },
        loginFailed: (state, action: PayloadAction<commonApiTypes.IApiFailed>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isLoginSuccess: false
            };
        },
        loginReset: () => {
            return {
                ...LoginState
            };
        }
    }
});

export { loginSlice };
