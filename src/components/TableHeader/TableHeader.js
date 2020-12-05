import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '@material-ui/core/Button';
import { useStyles } from './TableHeaderStyles';
import { tableSetSort } from '../../redux/actions/table';

export const tableHeadList = [
    { id: 'label', title: 'coin' },
    { id: 'quantity', title: 'quantity' },
    { id: 'buyPrice', title: 'buy_price' },
    { id: 'price', title: 'current_price' },
    { id: 'change', title: 'change' },
    { id: 'profit', title: 'profit' },
    { id: 'val', title: 'value' },
    { id: 'wallet', title: 'wallet' }
];

export default function TableHeader({ colWidth }) {
    const { t } = useTranslation();
    const { table, currency } = useSelector((state) => state);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClick = (id) => {
        dispatch(tableSetSort(id));
    };

    return (
        <div className={classes.root}>
            {tableHeadList.map((item, idx) => (
                <Button
                    hidden={table.columnsHidden.includes(item.id)}
                    component="div"
                    style={{
                        width: colWidth[Object.keys(colWidth)[idx]],
                        backgroundColor: table.sortBy === item.id ? '#dbdbdb' : ''
                    }}
                    key={item.title}
                    onClick={() => handleClick(item.id)}
                    className={`${classes[`col${idx + 1}`]} ${classes.col}`}
                >
                    <>
                        {`${t(item.title)}${item.id === 'profit' ? `, ${currency.symbol}` : ''}`}
                        {table.sortBy === item.id && (
                            <span className={classes.sort}>
                                {table.sortDesc ? (
                                    <ArrowRightAltIcon
                                        fontSize="small"
                                        className={`${classes.arrow} ${classes.arrowTop}`}
                                    />
                                ) : (
                                    <ArrowRightAltIcon
                                        fontSize="small"
                                        className={`${classes.arrow} ${classes.arrowBottom}`}
                                    />
                                )}
                            </span>
                        )}
                    </>
                </Button>
            ))}
        </div>
    );
}

TableHeader.propTypes = {
    colWidth: PropTypes.shape({})
};

TableHeader.defaultProps = {
    colWidth: {}
};
