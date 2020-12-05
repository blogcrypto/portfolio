import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    total: {
        fontSize: '1.25rem',
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: '-.25rem',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('xl')]: {
            fontSize: '1rem',
        },
    },
    profit: {
        fontSize: '1rem'
    }
}));
