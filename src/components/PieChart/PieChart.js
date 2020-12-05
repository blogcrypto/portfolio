import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fade from '@material-ui/core/Fade';
import { sortNum } from '../../utils/utils';
import PieChartRecharts from '../PieChartRecharts/PieChartRecharts';
import { useStyles } from './PieChartStyles';

export default function PieChart() {
    const { currency, table } = useSelector((state) => state);
    const [pieData, setPieData] = useState([]);
    const [cap, setCap] = useState(true);
    const classes = useStyles();
    const theme = useTheme();
    const notMobile = useMediaQuery(theme.breakpoints.up('sm'));
    // const {tableData, fiat, fiatSymbol} = state;

    const pieConfig = {
        pieWidth: notMobile ? 576 - 24 : 288,
        pieHeight: notMobile ? 430 : 288,
        pieOuter: 270
    };

    useEffect(() => {
        if (table.items.length) {
            setPieData(
                table.items
                    .map((item) => {
                        if (!Number.isNaN(item.val)) {
                            return {
                                name: item.title,
                                label: item.label,
                                value: item.val,
                                fiat: currency.value,
                                fiatSymbol: currency.symbol
                            };
                        }
                        return null;
                    })
                    .filter((item) => !!item)
                    .sort((a, b) => sortNum(b.value, a.value))
            );
        }
    }, [currency.symbol, currency.value, table.items]);

    useEffect(() => {
        if (pieData.length) {
            setCap(false);
        }
    }, [pieData.length]);

    return (
        <div
            className={classes.root}
            style={{
                width: pieConfig.pieWidth,
                height: pieConfig.pieHeight,
                margin: !notMobile ? '1.5rem auto' : null
            }}
        >
            <Fade in={cap} timeout={{ enter: 0, exit: 3000 }} disableStrictModeCompat>
                <div
                    className={classes.cap}
                    style={{
                        borderWidth: (pieConfig.pieOuter - pieConfig.pieOuter * 0.865) / 2,
                        height: pieConfig.pieOuter,
                        width: pieConfig.pieOuter
                    }}
                />
            </Fade>

            <PieChartRecharts
                pieData={pieData}
                fiatSymbol={currency.symbol}
                width={pieConfig.pieWidth}
                height={pieConfig.pieHeight}
                outer={pieConfig.pieOuter}
                compact={!notMobile}
            />
        </div>
    );
}
