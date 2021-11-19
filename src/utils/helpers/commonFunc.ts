import { languageCodes } from 'utils/constants/languageCodes';

/**
 * Get API Error Message
 * @param response
 */
export const getApiErrorMessage = (response: any) => {
    const responseMsg = response?.data?.error ? response?.data?.error : null;
    const unhandleErrorMsg = response?.message ? response?.message : null;
    return responseMsg || unhandleErrorMsg || 'Something went wrong. please try again';
};

/**
 * Custom String Convert
 * @param string
 */
export const customToString = (string: string | any) => {
    return string ? string.toString() : '';
};

/**
 * Remove Empty Places
 * @param string
 */
export const removeWhiteSpaces = (string: string | any) => {
    if (string) {
        return string.split(/\s+/).join('');
    }
    return string;
};

/**
 * Simple deep copy with JSON.parse and JSON.stringify except the method copy of the source object to target object
 *
 * @param value T
 * @returns T
 */
export const simpleDeepCopy = <T>(value: T): T => {
    try {
        return JSON.parse(JSON.stringify(value));
    } catch (e) {
        return value;
    }
};

/**
 * Get Current TimeStamp
 */
export const getCurrentTime = () => {
    return new Date().getTime();
};

/**
 * Get Range
 * @param start
 * @param end
 * @param step
 * @returns
 */
export const range = (start: number, end: number, step: number) => {
    return Array.from(Array.from(Array(Math.ceil((end - start + 1) / step)).keys()), (x) => start + x * step);
};

/**
 * Language Native Name
 * @param langCode
 */
export const getLanguageNativeName = (languageCode: string) => {
    const getLangCodeIndex = languageCodes.findIndex((langCode) => langCode.code === languageCode);
    if (getLangCodeIndex !== -1) {
        const lang = languageCodes[getLangCodeIndex];
        if (lang.nativeName) {
            return lang.nativeName;
        }
        return languageCode;
    }
    return languageCode;
};
