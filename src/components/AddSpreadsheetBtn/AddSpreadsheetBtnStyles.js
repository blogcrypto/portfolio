import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    add: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&>span': {
            ...theme.typography.button,
            marginLeft: theme.spacing(3),
            color: theme.palette.primary.main
        },
        '& span:not([class])': {
            borderBottom: '1px solid transparent',
            lineHeight: '1.4'
        },
        '&:hover>span': {
            color: theme.palette.primary.dark
        },
        '&:hover>.MuiFab-root': {
            background: theme.palette.primary.dark
        },
        '&:focus span:not([class])': {
            borderBottomColor: theme.palette.primary.main
        }
    },
}));
