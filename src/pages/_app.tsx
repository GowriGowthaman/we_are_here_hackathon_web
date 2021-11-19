import 'bootstrap/dist/css/bootstrap.css';
import 'styles/style.scss';

import type { AppProps } from 'next/app';
import ReactNotification from 'react-notifications-component';
import { Provider } from 'react-redux';

import 'react-notifications-component/dist/theme.css';

import { reduxStore } from 'store';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={reduxStore}>
            <ReactNotification />
            <Component {...pageProps} />
        </Provider>
    );
};
export default MyApp;
