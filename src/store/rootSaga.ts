import { all, fork } from 'redux-saga/effects';

import { takeVerifySiteCaptchaRequest } from './sagas/verifySiteCaptchaSaga';

const rootSaga = function* () {
    yield all([fork(takeVerifySiteCaptchaRequest)]);
};

export { rootSaga };
