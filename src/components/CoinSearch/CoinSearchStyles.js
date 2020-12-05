import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    form: {
        margin: '0 0 20px 0'
    },
    result: {
        fontSize: 16
    },
    head: {
        display: 'table-row'
    },
    headCol1: {
        display: 'table-cell',
        fontWeight: theme.typography.fontWeightMedium
    },
    headCol2: {
        display: 'table-cell',
        padding: theme.spacing(0, 4)
    },
    titleText: {
        marginRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium
    },
    titleDesc: {
        color: theme.palette.success.main
    },
    body: {
        marginTop: 10,
        maxHeight: 380,
        maxWidth: 400,
        overflow: 'auto'
    },
    row: {
        display: 'table-row'
    },
    code: {
        display: 'table-cell',
        textTransform: 'uppercase',
        userSelect: 'none',
        maxWidth: 80,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.palette.grey['500']
    },
    title: {
        display: 'table-cell',
        padding: theme.spacing(0, 4),
        width: '100%'
    },
    copy: {
        display: 'table-cell',
        padding: '0 10px 0 0',
        '& .MuiIconButton-sizeSmall': {
            fontSize: 18
        }
    },
    empty: {},
    snackbar: {
        background: theme.palette.primary.main
    }
}));
