import { makeStyles } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

export const useStyles = makeStyles((theme) => ({
    col: {
        padding: '3px 15px 3px 10px',
        flexShrink: 0,
        fontSize: 14,
        whiteSpace: 'nowrap'
    },
    typo: {
        fontSize: 14
    },
    load: {
        transition: theme.transitions.create(['opacity']),
        opacity: 1
    },
    loadActive: {
        opacity: 0.18
    },
    preloader: {
        top: 0,
        right: -10,
        position: 'absolute',
        bottom: 0,
        marginTop: 5,
        overflow: 'hidden'
    },
    progress: {
        color: '#ccc',
        animationDuration: '.8s'
    },
    error: {
        right: -9,
        position: 'absolute',
        fontSize: '14px',
        top: 0,
        bottom: 0,
        margin: 'auto',
        color: 'red',
        zIndex: 1
    },
    titleWrap: {
        width: 'calc(100% - 25px)'
    },
    imgWrap: {
        width: 20,
        height: 20,
        flexGrow: 1,
        paddingRight: 7,
        marginTop: -2
    },
    indicator: {
        position: 'absolute',
        right: -5,
        top: 0,
        bottom: 0
    },
    textGreen: {
        color: theme.palette.success.dark
    },
    textRed: {
        color: theme.palette.error.main
    }
}));

export const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[2],
        fontSize: 14,
        padding: '5px 10px',
        fontWeight: theme.typography.fontWeightRegular
    }
}))(Tooltip);
