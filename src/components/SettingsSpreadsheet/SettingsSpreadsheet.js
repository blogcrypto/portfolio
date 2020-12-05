import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './SettingsSpreadsheetStyles';
import { spreadsheetSetLink } from '../../redux/actions/spreadsheet';
import { tableGroupOpenClear, tableSetSortClear } from '../../redux/actions/table';

export default function SettingsSpreadsheet(props) {
    const { t } = useTranslation();
    const { spreadsheet } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { handleClose } = props;
    const inputEl = React.useRef(null);
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [invalid, setInvalid] = React.useState(false);

    const handleChange = (e) => {
        setInvalid(false);
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        let isValid = false;

        if (value.length) {
            if (/https:\/\/docs.google.com\/spreadsheets\/d\/\S{44}\S*/.test(value)) {
                isValid = true;
            } else {
                setInvalid(true);
            }
        } else {
            setInvalid(true);
            // inputEl.current.focus();
        }

        if (isValid) {
            const sId = value.match(/d\/(\S{44})/)[1];
            const currentLocation = window.location.href;

            dispatch(spreadsheetSetLink(sId));
            localStorage.setItem('spreadsheetLink', sId);
            dispatch(tableGroupOpenClear());
            dispatch(tableSetSortClear());
            setValue('');
            handleClose();

            window.location.href = currentLocation;
        }
    };

    const handleClear = () => {
        setValue('');
        inputEl.current.focus();
    };

    // const handleSetDemo = () => {
    // dispatch(setSpreadsheetLink(DEMO_SPREADSHEET));
    // localStorage.removeItem('spreadSheetLink');
    // handleClose();
    // };

    // React.useEffect(() => {
    //     if (open) {
    //         setValue('');
    //         setInvalid(false);
    //     }
    // }, [open]);
    return (
        <div>
            {spreadsheet.link && (
                <Typography className={classes.current} component="div" variant="body2">
                    <span>{t('current_link')}</span>
                    <span style={{ color: 'green' }}>{spreadsheet.link}</span>
                </Typography>
            )}

            {invalid ? (
                <Typography component="div" className={classes.error}>
                    {t('enter_correct_link')}
                    <Typography component="div" color="error" className={classes.text}>
                        {`${t(
                            'example'
                        )}: https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik`}
                    </Typography>
                </Typography>
            ) : (
                <Typography component="div">
                    {t('enter_a_link_to_your_google_spreadsheets')}
                    <Typography variant="body2" color="textSecondary" className={classes.text}>
                        {`${t(
                            'example'
                        )}: https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik/edit?usp=sharing`}
                    </Typography>
                </Typography>
            )}
            <TextField
                inputRef={inputEl}
                fullWidth
                size="small"
                autoFocus
                disabled={spreadsheet.isDemo}
                label={!spreadsheet.isDemo ? t('enter_your_spreadsheets_link') : t('not_available_in_demo_version')}
                className={`${classes.textField} ${classes.dense}`}
                margin="dense"
                onChange={(e) => handleChange(e)}
                value={value}
                InputLabelProps={{ classes: { root: classes.label } }}
            />

            <div className={classes.btnWrapper}>
                <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={() => handleSubmit()}
                    disabled={spreadsheet.isDemo}
                >
                    {t('ok')}
                </Button>
                <Button variant="outlined" className={classes.btn} disabled={!value} onClick={() => handleClear()}>
                    {t('clear')}
                </Button>
            </div>
        </div>
    );
}
