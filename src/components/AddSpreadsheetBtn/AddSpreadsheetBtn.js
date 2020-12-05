import React from 'react';
import { useTranslation } from 'react-i18next';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './AddSpreadsheetBtnStyles';

export default function AddSpreadsheetBtn(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const {handleClickOpen} = props;

    return (
        <div>
            <div
                role="button"
                tabIndex="0"
                aria-label="Button"
                className={classes.add}
                onClick={() => handleClickOpen('panel1')}
                onKeyDown={() => handleClickOpen('panel1')}
            >
                <Fab color="primary" size="small" aria-label={t('add_spreadsheet')}>
                    <AddIcon />
                </Fab>
                <span>{t('add_spreadsheet')}</span>
            </div>
        </div>
    );
}
