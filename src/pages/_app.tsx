import 'bootstrap/dist/css/bootstrap.css';
import 'styles/style.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { reduxStore } from 'store';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={reduxStore}>
            <Component {...pageProps} />
        </Provider>
    );
};
export default MyApp;
