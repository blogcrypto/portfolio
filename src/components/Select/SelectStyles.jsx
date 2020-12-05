import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    wrapper: {
        position: 'relative'
    },
    paper: {
        position: 'absolute',
        top: 40,
        right: 0,
        left: 0,
        zIndex: 1000,
        [theme.breakpoints.up('xl')]: {
            top: 44,
        },
        [theme.breakpoints.up('xxl')]: {
            top: 48,
        },
    },
    wrap: {
        marginBottom: theme.spacing(1),
        minWidth: 90
    },
    icon: {
        display: 'inline-block',
        border: '1px solid #999',
        borderRadius: '50%',
        width: '1.4em',
        height: '1.4em',
        lineHeight: '1.3em',
        textAlign: 'center',
        marginRight: 8
    }
}));
