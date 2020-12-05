import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import debounce from 'lodash/debounce';
import Snackbar from '@material-ui/core/Snackbar';
import C from '../../redux/constants';
import { coinsSelectSetValue } from '../../redux/actions/coins';
import { useStyles } from './CoinSearchStyles';

export default function CoinSearch() {
    const { t } = useTranslation();
    const classes = useStyles();
    const { coins } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [val, setVal] = React.useState('');
    const [width, setWidth] = React.useState(80);
    const [snackPack, setSnackPack] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [messageInfo, setMessageInfo] = React.useState(undefined);
    const cellEl = React.useRef(null);

    const handleClick = (message) => () => {
        setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleExited = () => {
        setMessageInfo(undefined);
    };

    const search = React.useCallback(
        debounce(
            (value) => {
                const inputList = value.split(/\s|-/).filter((item) => item.length);

                const defineEntry = (el) => {
                    const entry =
                        inputList.filter((item) => el.toLowerCase().indexOf(item.toLowerCase()) !== -1).length ===
                        inputList.length;

                    return !!entry;
                };

                const res = JSON.parse(localStorage.getItem('coinsList')).filter(
                    (item) => defineEntry(item.id) || defineEntry(item.symbol) || defineEntry(item.name)
                );

                dispatch(coinsSelectSetValue(value, res));
            },
            1000,
            { leading: true }
        ),
        []
    );

    const handleChange = (event) => {
        const { value } = event.target;

        setVal(value);

        if (value.trim().length > 2) {
            search(value);
        } else {
            dispatch(coinsSelectSetValue(value, []));
        }
    };

    React.useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });
            setSnackPack((prev) => prev.slice(1));
            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    React.useEffect(() => {
        if (!localStorage.getItem('coinsList')) {
            dispatch({ type: C.COINS_LIST_FETCH_DATA });
        }

        setVal(coins.value);

        if (cellEl.current !== null) {
            setWidth(cellEl.current.offsetWidth);
        }
    }, [coins.value, dispatch]);

    return (
        <>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
                <TextField
                    id="supportedCoins"
                    label={t('coin')}
                    value={val}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                />
            </form>

            <div className={classes.root}>
                {coins.list.length ? (
                    <div className={classes.result}>
                        <div className={classes.head}>
                            <div
                                className={classes.headCol1}
                                style={{
                                    width
                                }}
                            >
                                {t('coin')}
                            </div>
                            <div className={classes.headCol2}>
                                <span className={classes.titleText}>{t('title')}</span>
                                <span className={classes.titleDesc}>{`(${t('used_for_spreadsheet')})`}</span>
                            </div>
                        </div>

                        <div className={classes.body}>
                            <div className={classes.row}>
                                <div ref={cellEl} className={classes.code} />
                                <div className={classes.title} />
                                <div className={classes.copy} />
                            </div>
                            {coins.list.map((item) => (
                                <div key={item.id} className={classes.row}>
                                    <div className={classes.code} title={item.symbol.toUpperCase()}>
                                        {item.symbol}
                                    </div>

                                    <div className={classes.title}>{item.name}</div>

                                    <div className={classes.copy}>
                                        <CopyToClipboard
                                            text={item.name}
                                            onCopy={handleClick(t('title_copied_to_clipboard'))}
                                        >
                                            <IconButton aria-label="copy" size="small" title={t('copy_to_buffer')}>
                                                <FileCopyOutlinedIcon fontSize="inherit" />
                                            </IconButton>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Snackbar
                                key={messageInfo ? messageInfo.key : undefined}
                                open={open}
                                autoHideDuration={2000}
                                onClose={handleClose}
                                onExited={handleExited}
                                message={messageInfo ? messageInfo.message : undefined}
                                ContentProps={{
                                    classes: {
                                        root: classes.snackbar
                                    }
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={classes.empty}>
                        <Typography variant="body1">
                            {val.length > 2 ? t('found_nothing') : t('enter_coin_label')}
                        </Typography>
                    </div>
                )}
            </div>
        </>
    );
}
