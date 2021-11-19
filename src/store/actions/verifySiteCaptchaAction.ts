import { createAction } from '@reduxjs/toolkit';

import { verifySiteCaptchaTypes } from 'types/store/verifySiteCaptcha';

export const VERIFY_SITE_CAPTCHA_SAGA = 'VERIFY_SITE_CAPTCHA_SAGA';
export const verifySiteCaptchaSaga =
    createAction<verifySiteCaptchaTypes.IVerifySiteCaptchaForm>(VERIFY_SITE_CAPTCHA_SAGA);
