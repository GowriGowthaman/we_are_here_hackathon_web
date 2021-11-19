import { all, fork } from 'redux-saga/effects';

import { takeLoginRequest } from './sagas/loginSaga';
import { takeSearchDataRequest } from './sagas/searchDataSaga';

const rootSaga = function* () {
    yield all([fork(takeSearchDataRequest)]);
    yield all([fork(takeLoginRequest)]);
};

export { rootSaga };
