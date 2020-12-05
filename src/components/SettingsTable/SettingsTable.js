import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { tableColumnsHidden } from '../../redux/actions/table';
import { tableHeadList } from '../TableHeader/TableHeader';
import { useTranslation } from 'react-i18next';

export default function SettingsTable() {
    const { t } = useTranslation();
    const { table } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(tableColumnsHidden(event.target.name));
    };

    useEffect(() => {
        localStorage.setItem('columnsHidden', JSON.stringify(table.columnsHidden));
    }, [table.columnsHidden]);

    return (
        <div>
            <FormControl component="fieldset">
                <div>{t('show_columns')}</div>

                <Grid container>
                    {tableHeadList
                        .filter((item) => item.id !== 'label')
                        .map((item) => (
                            <Grid item xs={12} sm={6} key={item.id}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={!table.columnsHidden.includes(item.id)}
                                            onChange={handleChange}
                                            name={item.id}
                                            color="primary"
                                            size="small"
                                        />
                                    }
                                    label={t(item.title)}
                                />
                            </Grid>
                        ))}
                </Grid>
            </FormControl>
        </div>
    );
}
