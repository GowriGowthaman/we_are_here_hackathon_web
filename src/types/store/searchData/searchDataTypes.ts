import { commonApiTypes } from 'types/common';

export interface ISearchDataForm {
    search: string | null;
    km: number | null;
    lat: number | null;
    lang: number | null;
}

export interface ISearchDataReducer {
    isLoading: boolean;
    isSearchDataSuccess?: boolean;
}

export interface ISearchDataResponse {
    response: any;
}

export interface ISearchData
    extends commonApiTypes.IApiFailed,
        ISearchDataForm,
        ISearchDataReducer,
        ISearchDataResponse {}
