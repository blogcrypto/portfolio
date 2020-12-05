import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    wrap: {
        display: 'inline-flex',
        maxWidth: '100%',
        overflow: 'auto',
        // display: 'flex',
        // overflow: 'auto',
        border: '1px solid #ccc'
    },
    root: {
        // display: 'flex',
        flexWrap: 'wrap',
        // flexGrow: 1,
        minHeight: 59.5
    },
    initRow: {
        borderTop: '1px solid #eee',
        padding: 0,
        overflow: 'hidden'
    },
    row: {
        borderTop: '1px solid #eee',
        padding: 0,
        fontWeight: 500,
        // backgroundColor: '#fafafa',
        '&:hover': {
            // backgroundColor: '#f5f5f5',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: `-1px -1px 0px 1px ${theme.palette.primary.main} inset, 1px 1px 0px 1px ${theme.palette.primary.main} inset`
        }
    },
    toggle: {
        // backgroundColor: '#fefefe',
        // backgroundColor: '#e8f5ff',
        borderTop: '1px solid #eee',
        cursor: 'pointer',
        fontWeight: 500,
        padding: 0,
        transition: 'background-color 0.12s',
        '&:hover': {
            backgroundColor: '#fafafa',
            '& .MuiSvgIcon-root': {
                color: '#888'
            }
        }
    },
    toggleActive: {
        // opacity: .5,
        backgroundColor: '#e8e8e8',
        '&:hover': {
            backgroundColor: '#e0e0e0'
        }
    },
    nested: {
        backgroundColor: '#f5f5f5',
        // backgroundColor: '#eff8ff',
        borderTop: '1px solid #eee',
        padding: 0,
        '&:hover': {
            // backgroundColor: '#e5f3ff',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: `-1px -1px 0px 1px ${theme.palette.primary.main} inset, 1px 1px 0px 1px ${theme.palette.primary.main} inset`
        }
    },
    collapse: {
        width: '100%'
    },
    progress: {
        margin: theme.spacing(2)
        // color: '#ccc'
    },
    groupItem: {
        // outline: '3px solid red'
    },
    icon: {
        color: '#bbb',
        marginLeft: 'auto',
        fontSize: 28
    }
}));
