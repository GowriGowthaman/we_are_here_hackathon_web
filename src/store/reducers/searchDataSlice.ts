import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { commonApiTypes } from 'types/common';
import { searchDataTypes } from 'types/store/searchData';

const searchDataState: searchDataTypes.ISearchData = {
    // Form
    search: '',
    km: 10,
    lang: null,
    lat: null,

    // Reducer
    isLoading: false,

    // Response
    response: null,

    // Fail Response
    status: false
};

const searchDataSlice = createSlice({
    name: 'searchDataState',
    initialState: searchDataState,
    reducers: {
        searchDataStart: (state, action: PayloadAction<searchDataTypes.ISearchDataForm>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: true
            };
        },
        searchDataSuccess: (state, action: PayloadAction<searchDataTypes.ISearchDataResponse>) => {
            return {
                ...state,
                ...action.payload,
                response: action.payload,
                isLoading: false,
                isSearchDataSuccess: true
            };
        },
        searchDataFailed: (state, action: PayloadAction<commonApiTypes.IApiFailed>) => {
            return {
                ...state,
                ...action.payload,
                isLoading: false,
                isSearchDataSuccess: false
            };
        },
        searchDataReset: () => {
            return {
                ...searchDataState
            };
        }
    }
});

export { searchDataSlice };
