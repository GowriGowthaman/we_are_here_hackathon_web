import { customToString } from 'utils/helpers/commonFunc';

const IS_BROWSER = typeof window !== 'undefined';

export const setLocalStorage = (storageName: string, storageValue: any) => {
    if (IS_BROWSER) {
        localStorage.setItem(storageName, JSON.stringify(storageValue));
    }
};

export const removeLocalStorage = (storageName: string) => {
    if (IS_BROWSER) {
        localStorage.removeItem(storageName);
    }
};

export const getLocalStorage = (storageName: string) => {
    if (IS_BROWSER) {
        const data = localStorage.getItem(storageName);
        if (data) {
            const storageValue = customToString(localStorage.getItem(storageName));
            return JSON.parse(storageValue);
        }
        return null;
    }
};

export const isLocalStorage = () => {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

export const isCookieEnable = () => {
    return navigator.cookieEnabled;
};
