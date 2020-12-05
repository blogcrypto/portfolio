import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        lineHeight: '1rem',
        paddingRight: 2.5,
        marginLeft: 'auto'
    },
    icon: {
        fontSize: '1.2rem',
        color: '#e8e8e8',
        transition: 'color .12s',
        '&:hover': {
            color: '#aaa'
        }
    },
    popover: {
        pointerEvents: 'none'
    },
    paper: {
        padding: theme.spacing(1)
    }
}));
