import * as HttpMethods from 'utils/constants/method';

export const apiRoutes = {
    survaleData: { apiPath: '/v0/s/:survaleID', action: HttpMethods.GET },
    survaleDataDetail: { apiPath: '/v0/s/:survaleID/:survaleDetailId', action: HttpMethods.GET },
    survaleDetail: { apiPath: '/v0/sd/:survaleDetailId', action: HttpMethods.GET },

    survaleDataEsl: { apiPath: '/v0/esl/:survaleID', action: HttpMethods.GET },
    survaleDataSubmit: { apiPath: '/v0/survey-submit/:survaleID', action: HttpMethods.POST },
    survalePartialSave: { apiPath: '/v0/survey-partial-save/:survaleID', action: HttpMethods.POST },
    verifySiteCaptcha: { apiPath: '/v0/verify-site-captcha-v3', action: HttpMethods.POST }
};
