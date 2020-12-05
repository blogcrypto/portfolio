import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        position: 'relative',
        margin: 'auto'
    },
    cap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderStyle: 'solid',
        borderColor: '#eee',
        position: 'absolute',
        borderRadius: '50%',
        margin: 'auto'
    }
});
