import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const persistConfig = {
    key: 'reduxPersistState',
    timeout: 0,
    storage,
    whitelist: [],
    transforms: [createWhitelistFilter('', [])]
};

const pReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware: Array<any> = [sagaMiddleware];

const reduxStore = configureStore({
    reducer: pReducer,
    middleware
});

persistStore(reduxStore);

sagaMiddleware.run(rootSaga);

export { reduxStore };
