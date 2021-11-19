import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { config } from 'config';
import { commonApiTypes } from 'types/common';

export const apiCall = async (apiConfig: commonApiTypes.IApiConfig, promisePayload?: any): Promise<any> => {
    try {
        const baseURL = config.apiBaseURL;
        const url = `${baseURL}${apiConfig.apiPath}`;
        const requestConfig: AxiosRequestConfig = {
            url,
            method: apiConfig.action,
            data: apiConfig.data,
            headers: apiConfig.headers ? apiConfig.headers : defaultHeader(),
            params: apiConfig.params,
            cancelToken: apiConfig.cancelToken,
            timeout: 0,
            validateStatus(status: number) {
                // If user un authorized
                if (status === 401) {
                    // removeCookie(COOKIES_NAME.IS_LOG_IN, true, '/');
                }
                return status >= 200 && status <= 500;
            }
        };
        return await axios(requestConfig)
            .then((res: AxiosResponse<any>) => {
                return {
                    ...res,
                    ...(promisePayload && { promisePayload })
                };
            })
            .catch((error: AxiosError<any>) => {
                return error;
            });
    } catch (ex) {
        return false;
    }
};

export const defaultHeader = () => {
    const headers: commonApiTypes.IDefaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    return headers;
};
