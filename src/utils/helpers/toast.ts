import { NOTIFY_TIMEOUT } from 'utils/constants/notifyTypes';

export const getToaster = (title: string, message?: string, type?: string | any) => {
    return {
        title,
        message: message || '',
        type, // 'default', 'success', 'info', 'warning'
        container: 'bottom-right', // where to position the notifications
        animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
        animationOut: ['animated', 'fadeOut'], // animate.css classes that's applied
        dismiss: {
            duration: NOTIFY_TIMEOUT,
            onScreen: true,
            pauseOnHover: true
        }
    };
};

export const getToasterStop = (title: string, message?: string, type?: string | any) => {
    return {
        title,
        message,
        type, // 'default', 'success', 'info', 'warning'
        container: 'bottom-right', // where to position the notifications
        animationIn: ['animated', 'fadeIn'], // animate.css classes that's applied
        animationOut: ['animated', 'fadeOut'] // animate.css classes that's applied
    };
};
