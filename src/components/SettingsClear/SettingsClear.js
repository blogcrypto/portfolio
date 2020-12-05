import React from 'react';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export default function SettingsClear() {
    const { t } = useTranslation();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const handleClick = () => {
        const currentLocation = window.location.href;

        localStorage.removeItem('groupOpen');
        localStorage.removeItem('sortBy');
        localStorage.removeItem('sortDesc');
        localStorage.removeItem('spreadsheetLink');
        localStorage.removeItem('currency');
        localStorage.removeItem('coinsList');
        localStorage.removeItem('columnsHidden');
        localStorage.removeItem('coinsListTimestamp');
        localStorage.removeItem('currencySymbol');

        window.location.href = currentLocation;
    };

    return (
        <div>
            <FormControl component="fieldset">
                <div style={{marginBottom: '1.5rem'}}>
                    <Typography variant='body1' color="error">{t('clear_settings_warning')}</Typography>
                </div>

                <Button
                    variant="contained"
                    color="secondary"
                    disabled={!checked}
                    startIcon={<DeleteIcon />}
                    onClick={handleClick}
                >
                    {t('delete')}
                </Button>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Agree checkbox' }}
                            color="primary"
                            size="small"
                        />
                    }
                    label={t('clear_settings_confirm')}
                    style={{marginTop: '.5rem'}}
                />
            </FormControl>
        </div>
    );
}
