import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    current: {
        marginBottom: theme.spacing(3),
        color: theme.palette.grey['600'],
        wordBreak: 'break-all',
        '&>span:not(:last-of-type)': {
            marginRight: theme.spacing(1)
        }
    },
    textField: {
        width: '100%',
        '& label.Mui-focused': {
            color: '#777'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#777'
        }
    },
    error: {
        color: 'red'
    },
    text: {
        fontSize: 12,
        wordBreak: 'break-all',
        padding: theme.spacing(2, 0)
    },
    btnWrapper: {
        padding: '1rem 0 0.5rem',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'right'
        }
    },
    btn: {
        marginRight: '1rem',
        marginBottom: '0.5rem'
    },
    label: {
        lineHeight: '0.7em'
    }
}));
