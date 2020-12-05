import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './TotalStyles';
import { decimalFormat, sum } from '../../utils/utils';

export default function Total(props) {
    const { t } = useTranslation();
    const classes = useStyles();
    const { data, symbol, currency } = props;
    const [value, setValue] = React.useState({ val: 0, profit: 0 });

    React.useEffect(() => {
        if (data.length) {
            if (currency === 'btc') {
                setValue({
                    val: sum(data, 'val').toFixed(8),
                    profit: sum(data, 'profit').toFixed(8)
                });
            } else {
                setValue({
                    val: decimalFormat(sum(data, 'val'), 2),
                    profit: decimalFormat(sum(data, 'profit'), 2)
                });
            }
        }
    }, [currency, data]);

    return (
        <>
            <div className={classes.total}>
                <span
                    style={{
                        marginRight: '0.25rem',
                        marginBottom: '-135px',
                        color: '#777',
                        fontWeight: 'normal'
                    }}
                >{`${t('total')}:`}</span>
                {currency === 'usd' || currency === 'eur' ? (
                    <span>{`${symbol} ${value.val}`}</span>
                ) : (
                    <span>{`${value.val} ${symbol}`}</span>
                )}
            </div>
            <div
                className={classes.profit}
                style={{
                    color: parseFloat(value.profit) < 0 ? 'red' : 'green'
                }}
            >
                <span style={{ marginRight: '0.5rem' }}>{`${t('profit')}:`}</span>
                {currency === 'usd' || currency === 'eur' ? (
                    <span>{`${symbol} ${value.profit}`}</span>
                ) : (
                    <span>{`${value.profit} ${symbol}`}</span>
                )}
            </div>
        </>
    );
}
