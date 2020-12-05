import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useStyles } from './TableStyles';
import TableHeader from '../TableHeader/TableHeader';
import { TableRow } from '../TableRow/TableRow';
import { tableGroupOpen } from '../../redux/actions/table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddSpreadsheetBtn from '../AddSpreadsheetBtn/AddSpreadsheetBtn';

const colWidth = {
    col1: 120,
    col2: 145,
    col3: 130,
    col4: 130,
    col5: 110,
    col6: 130,
    col7: 130,
    col8: 130,
    col9: 50
};

export default function Table({ handleClickOpen }) {
    const { t } = useTranslation();
    const { app, currency, spreadsheet, market, table } = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleGroupOpen = (title) => {
        dispatch(tableGroupOpen(title));
    };

    useEffect(() => {
        localStorage.setItem('groupOpen', JSON.stringify(table.groupOpen));
    }, [table.groupOpen]);

    const Row = (item, group, isNested) => {
        return (
            <TableRow
                data={item}
                fiat={currency.value}
                fiatSymbol={currency.symbol}
                marketLoading={market.loading}
                marketHasItems={!!market.items.length}
                errorText={market.error}
                colWidth={colWidth}
                group={group}
                columnsHidden={table.columnsHidden}
                isNested={isNested}
            />
        );
    };

    if (spreadsheet.error) {
        return (
            <div>
                <AddSpreadsheetBtn handleClickOpen={handleClickOpen} />

                <div style={{ color: 'red', margin: '1rem 0 0.5rem' }}>{t('spreadsheet_error')}</div>
                <div>
                    <a
                        href={`https://spreadsheets.google.com/feeds/list/${spreadsheet.link}/od6/public/values?alt=json`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 'bolder' }}
                    >
                        {t('check')}
                    </a>
                    {` ${t('access_to_your_spreadsheet')}`}
                </div>
            </div>
        );
    }

    return (
        <>
            <Grid item xs={12}>
                <div className={classes.wrap}>
                    <List component="div" className={classes.root} disablePadding>
                        <TableHeader colWidth={colWidth} />

                        {spreadsheet.loading || app.loading ? (
                            <ListItem component="div" key="init" className={classes.initRow}>
                                <CircularProgress className={classes.progress} size={30} />
                            </ListItem>
                        ) : spreadsheet.error ? (
                            <div style={{ margin: 10, color: 'red' }}>{spreadsheet.error}</div>
                        ) : !!table.items.length || table.items[0]?.id !== 'empty' ? (
                            table.items.map((item) =>
                                !item.group ? (
                                    <ListItem tabIndex="0" component="div" key={item.id} className={classes.row}>
                                        {Row(item)}
                                    </ListItem>
                                ) : (
                                    <React.Fragment key={item.title}>
                                        <ListItem
                                            component="div"
                                            className={
                                                !table.groupOpen.find((title) => title === item.title)
                                                    ? classes.toggle
                                                    : `${classes.toggle} ${classes.toggleActive}`
                                            }
                                            onClick={() => handleGroupOpen(item.title)}
                                        >
                                            {Row(item, true)}

                                            {!table.groupOpen.find((title) => title === item.title) ? (
                                                <ExpandMore className={classes.icon} />
                                            ) : (
                                                <ExpandLess className={classes.icon} />
                                            )}
                                        </ListItem>

                                        <Collapse
                                            in={!!table.groupOpen.find((title) => title === item.title)}
                                            timeout="auto"
                                            unmountOnExit
                                            className={classes.collapse}
                                        >
                                            <List component="div" disablePadding>
                                                {item.group.map((i) => (
                                                    <ListItem
                                                        tabIndex="0"
                                                        component="div"
                                                        className={classes.nested}
                                                        key={i.id}
                                                    >
                                                        {Row(i, null, true)}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                )
                            )
                        ) : (
                            <div style={{ padding: 15, fontSize: '1.125rem' }}>
                                {t('enter_data_into_your')}
                                <a
                                    href={`https://docs.google.com/spreadsheets/d/${spreadsheet.link}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {` ${t('google_spreadsheet')}`}
                                </a>
                            </div>
                        )}
                    </List>
                </div>
            </Grid>
        </>
    );
}
