import { commonApiTypes } from 'types/common';

export interface ILoginForm {
    email: string | null;
    password: string | null;
    name?: string | null;
    mobileNumber?: string | null;
}

export interface ILoginReducer {
    isLoading: boolean;
    isLoginSuccess?: boolean;
}

export interface ILoginResponse {
    token: string | null;
}

export interface ILogin extends commonApiTypes.IApiFailed, ILoginForm, ILoginReducer, ILoginResponse {}
