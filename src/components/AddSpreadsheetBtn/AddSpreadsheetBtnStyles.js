import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    add: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&>span': {
            ...theme.typography.button,
            marginLeft: theme.spacing(3),
            color: theme.palette.primary.main
        },
        '&:hover>span': {
            color: theme.palette.primary.dark
        },
        '&:hover>.MuiFab-root': {
            background: theme.palette.primary.dark
        }
    },
}));
