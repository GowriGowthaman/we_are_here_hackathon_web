import { commonApiTypes } from 'types/common';

export interface ISurvaleDetailForm {
    survaleDetailId: number | string | string[] | null;
}

export interface ISurvaleDetailSuccess {
    candidate: {
        firstName: string;
        lastName: string;
    };
    expired: boolean;
    hiringManager: {
        firstName: string;
        lastName: string;
    };
}

export interface ISurvaleDetailReducer {
    isLoading: boolean;
    isSurvaleDetail?: boolean;
}

export interface ISurvaleDetail
    extends commonApiTypes.IApiFailed,
        ISurvaleDetailForm,
        ISurvaleDetailSuccess,
        ISurvaleDetailReducer {}
