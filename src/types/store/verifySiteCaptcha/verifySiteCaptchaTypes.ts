import { commonApiTypes } from 'types/common';

export interface IVerifySiteCaptchaForm {
    gCapResponse: string | null;
    key: number | null;
}

export interface IVerifySiteCaptchaResponse {
    success: boolean;
    token: string;
}

export interface IVerifySiteCaptchaReducer {
    isLoading: boolean;
    isSuccess?: boolean;
    response: any;
}

export interface IVerifySiteCaptcha
    extends commonApiTypes.IApiFailed,
        IVerifySiteCaptchaForm,
        IVerifySiteCaptchaResponse,
        IVerifySiteCaptchaReducer {}
