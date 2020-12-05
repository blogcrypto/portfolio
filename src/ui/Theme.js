import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import withStyles from '@material-ui/core/styles/withStyles';
import { customElevation } from './Elevation';

export const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff'
        },
        primary: {
            main: blue[700]
        },
        error: {
            main: red.A400
        },
        text: {
            primary: grey[800]
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        }
    },
    typography: {
        htmlFontSize: 16,
        fontSize: 16,
        fontFamily: [
            'Roboto',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        body1: {
            fontSize: '1rem'
        }
    },
    spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
    shadows: customElevation,
    overrides: {
        MuiButton: {
            root: {
                '&:focus': {
                    outline: 'none'
                }
            }
        },
        MuiButtonBase: {
            root: {
                '&:focus': {
                    outline: 'none'
                }
            }
        },
        MuiSvgIcon: {
            fontSizeLarge: {
                fontSize: '2rem'
            }
        }
    }
});

export const GlobalCss = withStyles((/* theme */) => ({
    '@global': {
        legend: {
            float: 'none'
        },
        // svg: {
        //     verticalAlign: 'middle'
        // },
        '[hidden]': {
            display: 'none !important'
        }
    }
}))(() => null);
