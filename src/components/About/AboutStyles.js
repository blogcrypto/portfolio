import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const useStyles = makeStyles((theme) => ({
    "@global": {
        '@keyframes octocat-wave': {
            '0%, 100%': {
                transform: 'rotate(0)'
            },
            '20%, 60%': {
                transform: 'rotate(-25deg)'
            },
            '40%, 80%': {
                transform: 'rotate(10deg)'
            }
        },
    },
    img: {
        borderRadius: theme.shape.borderRadius
    },
    git: {
        position: 'relative',
        '& svg:hover .octo-arm': {
            animation: 'octocat-wave 560ms ease-in-out',
            transformOrigin: '13px 27px'
        }
    },
    gitLogo: {
        width: '2rem',
        height: '2rem',
        marginTop: '-0.4rem'
    },
    toggleTooltip: {
        fontSize: '1em',
        marginTop: '-.15em'
    }
}));

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#fff',
        width: 320,
        height: 320,
        maxWidth: 320,
        padding: 0,
        boxShadow: theme.shadows[6]
    },
    arrow: {
        color: '#fff'
    }
}))(Tooltip);
