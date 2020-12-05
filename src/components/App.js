import React from 'react';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { GlobalCss, theme } from '../ui/Theme';
import store from '../redux/store';
import '../i18n';
import Layout from './Layout/Layout';

export default function App() {
    const { i18n } = useTranslation('translations');

    React.useEffect(() => {
        if (i18n) {
            if (!localStorage.getItem('locale')) {
                if (document.documentElement.lang?.substring(0, 2).toLowerCase() === 'ru') {
                    i18n.changeLanguage('ru');
                } else {
                    i18n.changeLanguage('en');
                }
            } else {
                i18n.changeLanguage(localStorage.getItem('locale'));
            }
        }
    }, [i18n]);

    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalCss />
                <Layout />
            </MuiThemeProvider>
        </Provider>
    );
}
