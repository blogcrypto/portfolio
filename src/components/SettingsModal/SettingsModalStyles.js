import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    modalHead: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(3)
        }
    },
    modalTitle: {
        ...theme.typography.h6,
        margin: 0,
        paddingLeft: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(6)
        }
    },
    content: {
        padding: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(6)
        }
    }
}));
