import { createAction } from '@reduxjs/toolkit';

import { searchDataTypes } from 'types/store/searchData';

export const SEARCH_DATA_SAGA = 'SEARCH_DATA_SAGA';
export const searchDataSaga = createAction<searchDataTypes.ISearchDataForm>(SEARCH_DATA_SAGA);
