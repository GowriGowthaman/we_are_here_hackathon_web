import { createSlice } from '@reduxjs/toolkit';

import { commonApiTypes } from 'types/common';

const commonState: commonApiTypes.ICommon = {
    exception: {
        error: null
    }
};

const commonSlice = createSlice({
    name: 'common',
    initialState: commonState,
    reducers: {
        exceptionHandlerRequest: (state, action) => {
            return {
                ...state,
                exception: {
                    error: action.payload
                }
            };
        }
    }
});

export { commonSlice };
