import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './LayoutStyles';
import i18n from '../../i18n';
import SettingsModal from '../SettingsModal/SettingsModal';
import PieChart from '../PieChart/PieChart';
import Table from '../Table/Table';
import Total from '../Total/Total';
import About from '../About/About';
import Select from '../Select/Select';
import CoinSearch from '../CoinSearch/CoinSearch';
import { spreadsheetSetDemo, spreadsheetSetLink } from '../../redux/actions/spreadsheet';
import AddSpreadsheetBtn from '../AddSpreadsheetBtn/AddSpreadsheetBtn';
import { LightTooltip } from '../TableRow/TableRowStyles';
import Switch from '../Switch/Switch';
import { tableGroupOpenAll } from '../../redux/actions/table';
import { declination } from '../../utils/utils';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div role="tab" hidden={ value !== index } id={ `tab-${ index }` }
             aria-labelledby={ `tab-${ index }` } { ...other }>
            { value === index && <>{ children }</> }
        </div>
    );
}

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

export default function Layout() {
    const {t} = useTranslation();
    const {currency, table, market, spreadsheet} = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'));
    const [value, setValue] = React.useState(0);
    const [modalOpen, setModalOpen] = React.useState({isOpen: false});

    const handleClickOpen = (panel) => {
        setModalOpen({isOpen: true, panel});
    };

    const handleClose = () => {
        setModalOpen({isOpen: false});
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCloseAllGroup = (bool) => {
        dispatch(tableGroupOpenAll(!bool));
    };

    React.useEffect(() => {
        const rootEl = document.getElementById('root');
        /**
         * Enable demo mode
         */
        if (!!rootEl && rootEl.dataset.id) {
            dispatch(spreadsheetSetLink(rootEl.dataset.id));
            dispatch(spreadsheetSetDemo(true));
        }

        if (spreadsheet.link) {
            dispatch({type: 'APP_GET_DATA'});
        }
    }, [dispatch, spreadsheet.link]);

    return (
        <div style={ {paddingTop: 20} }>
            <Grid container spacing={ 3 } alignItems="center">
                <Grid container item xs={ 12 } lg={ 5 } xxl={ 4 } alignItems="center" className={ classes.headerCol1 }>
                    <Grid item xs="auto" className={ classes.statistic }>
                        { !table.items.length && table.loading ? null : !market.loading ? (
                            <Total
                                data={ table.items.map((item) => ({val: item.val, profit: item.profit})) }
                                symbol={ currency.symbol }
                                currency={ currency.value }
                            />
                        ) : (
                                                                            <CircularProgress
                                                                                className={ classes.progress }
                                                                                size={ 16 } disableShrink
                                                                                thickness={ 5 } />) }
                    </Grid>
                    <Grid item xs="auto" className={ classes.actions }>
                        <div className={ classes.actionsWrapper }>
                            <Select />
                            <IconButton aria-label="settings" onClick={ () => handleClickOpen('panel2') }>
                                <SettingsIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>

                <Grid item xs={ 12 } lg={ 7 } xxl={ 8 } className={ classes.headerCol2 }>
                    <Paper square elevation={ 3 }>
                        <Tabs
                            value={ value }
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="Tabs"
                            variant="fullWidth"
                            onChange={ handleChange }
                            centered={ useMediaQuery(theme.breakpoints.down('sm')) }
                        >
                            <Tab
                                label={ notMobile && t('table') }
                                icon={ <BorderAllIcon /> }
                                classes={ {root: classes.tab, wrapper: classes.tabWrapper} }
                                aria-label="table"
                            />
                            <Tab
                                label={ notMobile && t('chart') }
                                icon={ <BarChartIcon /> }
                                classes={ {root: classes.tab, wrapper: classes.tabWrapper} }
                                disabled={ !table.items.length }
                                aria-label="graph"
                            />
                            <Tab
                                label={ notMobile && t('about') }
                                icon={ <InfoOutlinedIcon /> }
                                classes={ {root: classes.tab, wrapper: classes.tabWrapper} }
                                aria-label="about"
                            />
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid>

            <TabPanel value={ value } index={ 0 }>
                { spreadsheet.link ? (
                    <div className={ classes.table }>

                        { !spreadsheet.error && <>
                            <div className={ classes.switch }>
                                <LightTooltip placement="bottom-start" title={ t('collapse_groups') }>
                                    <div>
                                        <Switch
                                            size="small"
                                            checked={ !!table.groupOpen.length }
                                            handleChange={ handleCloseAllGroup }
                                        />
                                    </div>
                                </LightTooltip>
                            </div>

                            { !!table.columnsHidden.length && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disableElevation
                                    classes={ {
                                        root: classes.badge
                                    } }
                                    onClick={ () => handleClickOpen('panel2') }
                                >
                                    { `${ table.columnsHidden.length }
                                        ${ declination(table.columnsHidden.length, [
                                            t('hidden_columns-1'),
                                            t('hidden_columns-2'),
                                            t('hidden_columns-5')
                                        ]
                                    ) }` }
                                </Button>
                            ) }
                        </> }

                        <Table handleClickOpen={ handleClickOpen } />
                    </div>
                ) : (
                      <AddSpreadsheetBtn handleClickOpen={ handleClickOpen } />
                  ) }
            </TabPanel>

            <TabPanel value={ value } index={ 1 }>
                <PieChart />
            </TabPanel>

            <TabPanel value={ value } index={ 2 }>
                <div style={ {padding: '1.5rem 0'} }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 12 } xl={ 5 } style={ {marginBottom: '2rem'} }>
                            <Typography variant="h5" component="h2" style={ {marginBottom: '1rem'} }>
                                { t('supported_coins') }
                            </Typography>
                            <CoinSearch />
                        </Grid>
                        <Grid item sm={ 10 } md={ 9 } lg={ 7 } xxl={ 6 }>
                            <Typography variant="h5" component="h2" style={ {marginBottom: '1rem'} }>
                                BC Portfolio
                            </Typography>
                            <About lang={ i18n.language } />
                            <Paper variant="outlined" style={ {padding: '2rem', margin: '2rem 0 0'} }>
                                <p>{ t('contacts_message') }</p>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={ {color: '#fff'} }
                                    href={
                                        i18n.language === 'ru'
                                        ? 'https://blogcrypto.info/ru/about#contacts'
                                        : 'https://blogcrypto.info/about#contacts'
                                    }
                                    target="_blank"
                                >
                                    { t('contacts_button') }
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </TabPanel>

            <SettingsModal open={ modalOpen.isOpen } handleClose={ handleClose } panel={ modalOpen.panel } />
        </div>
    );
}
