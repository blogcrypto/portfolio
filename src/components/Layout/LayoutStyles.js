import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    headerCol1: {
        [theme.breakpoints.up('lg')]: {
            marginBottom: theme.spacing(1),
        },
    },
    headerCol2: {
        marginBottom: theme.spacing(4),
        marginTop: -theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            order: -1,
            marginTop: 0,
            marginBottom: theme.spacing(3),
        }
    },
    actions: {
        marginBottom: theme.spacing(2),
        marginLeft: 'auto',
        [theme.breakpoints.up('lg')]: {
            marginLeft: 0
        },
    },
    actionsWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    statistic: {
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            marginLeft: 'auto',
            marginRight: 20
        },
    },
    table: {
        position: 'relative',
        paddingTop: 15
    },
    badge: {
        top: -6,
        left: 45,
        fontSize: '10px !important',
        padding: '2px 8px !important',
        position: 'absolute !important',
        borderRadius: '0 !important'
    },
    tab: {
        fontSize: '0.625rem',
        minHeight: 50,
        [theme.breakpoints.up('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '0.875rem',
        },
    },
    tabWrapper: {
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            '& .MuiSvgIcon-root': {
                margin: '0 10px 0 0 !important'
            }
        },
    },
    switch: {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        left: 12,
        [theme.breakpoints.up('xl')]: {
            top: -12
        },
        [theme.breakpoints.up('xxl')]: {
            top: -13
        }
    }
}));
