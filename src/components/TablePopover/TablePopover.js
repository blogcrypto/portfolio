import React from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { useStyles } from './TablePopoverStyles';

export default function TablePopover(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { buyFee, sellFee, date } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {(!!buyFee || !!sellFee) && (
                <>
                    <div className={classes.root} onMouseEnter={handleOpen} onMouseLeave={handleClickAway}>
                        <MoreVertIcon className={classes.icon} />
                    </div>
                    <div>
                        <Popper open={!!anchorEl} anchorEl={anchorEl} transition placement="right-end">
                            {({ TransitionProps }) => (
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                <Fade {...TransitionProps} timeout={150}>
                                    <Paper elevation={8}>
                                        <div style={{ padding: '5px 10px', fontSize: 14 }}>
                                            <div>{`${t('buy_fee')}: ${!buyFee ? '—' : `${buyFee}%`}`}</div>
                                            <div>{`${t('sell_fee')}: ${!sellFee ? '—' : `${sellFee}%`}`}</div>
                                            {!!date && <div>{`${t('date')}: ${date}`}</div>}
                                        </div>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                </>
            )}
        </>
    );
}

TablePopover.propTypes = {
    buyFee: PropTypes.number,
    sellFee: PropTypes.number,
    date: PropTypes.string
};

TablePopover.defaultProps = {
    buyFee: 0,
    sellFee: 0,
    date: ''
};
