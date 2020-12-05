import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from './SelectStyles';
import { currencySetValue } from '../../redux/actions/currency';
import { marketFetchData } from '../../redux/actions/market';

const fiatList = [
    { id: 'btc', title: 'BTC', symbol: '₿', image: '' },
    { id: 'usd', title: 'USD', symbol: '$', image: '' },
    { id: 'eur', title: 'EUR', symbol: '€', image: '' },
    { id: 'rub', title: 'RUB', symbol: '₽', image: '' },
    { id: 'uah', title: 'UAH', symbol: '₴', image: '' }
];

export default function Select() {
    const { spreadsheet, currency } = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    // Add all supported currencies
    // const currenciesExtended = currency.items
    //     .filter(item => !fiatList.map(fiat => fiat.id).includes(item))
    //     .map(item => ({id: item, title: item.toUpperCase(), symbol: item.symbol || item.toUpperCase()}))

    const currenciesList = [...fiatList /* ...currenciesExtended */];

    const handleOpen = () => {
        setOpen((prev) => !prev);
        // dispatch({type: C.CURRENCIES_LIST_FETCH_DATA});
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const handleClick = (e) => {
        dispatch(
            currencySetValue({
                value: e.currentTarget.id,
                symbol: fiatList.filter((item) => e.currentTarget.id === item.id)[0].symbol
            })
        );
        dispatch(marketFetchData(spreadsheet.items, e.currentTarget.id));
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div className={classes.wrapper}>
                    <Button variant="outlined" onClick={handleOpen}>
                        <div className={classes.icon}>
                            {currenciesList.find((item) => item.id === currency.value).symbol}
                        </div>
                        {currenciesList.find((item) => item.id === currency.value).title}
                    </Button>
                    {open && (
                        <Paper elevation={8} className={classes.paper}>
                            <List component="div">
                                {currenciesList.map((item) => (
                                    <ListItem
                                        button
                                        id={item.id}
                                        key={item.id}
                                        onClick={handleClick}
                                        selected={item.id === currency.value}
                                    >
                                        <div className={classes.icon}>{item.symbol}</div>
                                        {item.title}
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
}
