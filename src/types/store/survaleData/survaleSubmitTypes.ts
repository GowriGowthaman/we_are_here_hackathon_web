import { commonApiTypes } from 'types/common';

import { IQuestionData } from './survaleDataTypes';

export interface ISubmitDataForm {
    isPartial: boolean;
    survaleID: number | string | string[] | null;
    data: ISubmitData;
}

export interface ISubmitData {
    invisibleCaptcha: {
        key: number | null;
        response: {
            success: boolean;
            token: string | null;
        };
    };

    survey: {
        questions: IQuestionData[];
        postId: string | null;

        followupSurvey: {
            title: string | null;
            id: number | null;
        };
        employeeSurvey: {
            title: string | null;
            id: number | null;
        };
        hiddenQuestions?: string;
    };
    surveysId?: string | string[] | null;
    postId?: string | null;
    partialRecordId?: string | null;
}

export interface ISubmitDataSuccess {
    success: boolean;
}

export interface ISubmitDataReducer {
    isLoading: boolean;
    isDataSubmitted?: boolean;
}

export interface ISurvaleSubmit
    extends commonApiTypes.IApiFailed,
        ISubmitDataForm,
        ISubmitDataSuccess,
        ISubmitDataReducer {}
