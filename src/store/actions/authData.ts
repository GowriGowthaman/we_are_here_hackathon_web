import { createAction } from '@reduxjs/toolkit';

import { loginTypes } from 'types/store/auth';

export const AUTH_LOGIN_SAGA = 'AUTH_LOGIN_SAGA';
export const authLoginSaga = createAction<loginTypes.ILoginForm>(AUTH_LOGIN_SAGA);
