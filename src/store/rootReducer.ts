import { combineReducers } from 'redux';

import { storeTypes } from 'types/store';

import { loginSlice } from './reducers/loginSlice';
import { searchDataSlice } from './reducers/searchDataSlice';

const appReducer = combineReducers<storeTypes.IStore>({
    searchDataState: searchDataSlice.reducer, // verifySiteCaptcha
    loginState: loginSlice.reducer // verifySiteCaptcha
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export { rootReducer };
