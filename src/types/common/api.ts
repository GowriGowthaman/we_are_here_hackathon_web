import { Method } from 'axios';

export type IApiConfig = {
    apiPath: string;
    headers?: null | IDefaultHeaders;
    action: Method | any;
    data?: any;
    params?: any;
    portal?: string | null;
};

export interface IDefaultHeaders {
    Accept: string;
    'Content-Type': string;
    withCredentials?: boolean;
    Authorization?: string;
}

export interface ICommon {
    exception: {
        error: null | string;
    };
}

export interface IApiFailed {
    error?: string;
    errorCode?: number | null;
    errors?: [];
    status: boolean;
}
