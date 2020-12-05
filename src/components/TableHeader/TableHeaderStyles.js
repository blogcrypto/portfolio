import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((/* theme */) => ({
    root: {
        display: 'flex',
        borderBottom: '1px solid #ccc',
        alignSelf: 'start',
        width: '100%'
    },
    col: {
        fontSize: 14,
        flexShrink: 0,
        padding: '3px 15px 3px 10px',
        textAlign: 'right',
        justifyContent: 'flex-end',
        borderRadius: 0,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: '#ebebeb'
        }
    },
    sort: {
        verticalAlign: 'middle',
        '& .MuiSvgIcon-root': {
            fontSize: 22
        }
    },
    arrow: {
        marginRight: -10,
        marginTop: -5
    },
    arrowTop: {
        transform: 'rotate(-90deg)'
    },
    arrowBottom: {
        transform: 'rotate(90deg)'
    },
    col1: {},
    col2: {},
    col3: {},
    col4: {},
    col5: {},
    col6: {},
    col7: {},
    col8: {
        justifyContent: 'flex-start',
        flexGrow: 1
    }
}));
