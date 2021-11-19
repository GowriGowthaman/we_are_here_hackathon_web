import { all, fork } from 'redux-saga/effects';

import { takeSearchDataRequest } from './sagas/searchDataSaga';

const rootSaga = function* () {
    yield all([fork(takeSearchDataRequest)]);
};

export { rootSaga };
