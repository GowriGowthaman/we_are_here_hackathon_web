import { combineReducers } from 'redux';

import { storeTypes } from 'types/store';

import { verifySiteCaptchaSlice } from './reducers/verifySiteCaptchaSlice';

const appReducer = combineReducers<storeTypes.IStore>({
    verifySiteCaptcha: verifySiteCaptchaSlice.reducer // verifySiteCaptcha
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export { rootReducer };
