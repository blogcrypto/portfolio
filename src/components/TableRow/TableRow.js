import React from 'react';
import PropTypes from 'prop-types';
// import TablePopover from '../TablePopover/TablePopover';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTranslation } from 'react-i18next';
import { useStyles, LightTooltip } from './TableRowStyles';
import { decimalFormat } from '../../utils/utils';
import TablePopover from '../TablePopover/TablePopover';
import { HtmlTooltip } from '../About/AboutStyles';

// export default function TableRow(props) {
export const TableRow = React.memo((props) => {
    const {t} = useTranslation();
    const {
        title,
        label,
        image,
        buyPrice = 0,
        price = 0,
        quantity = 0,
        buyFee = 0,
        sellFee = 0,
        date,
        wallet,
        profit = 0,
        change = 0,
        val = 0,
        showIndicator
    } = props.data;
    const {
        marketLoading,
        marketHasItems,
        isLoading,
        errorText,
        fiat,
        fiatSymbol,
        colWidth,
        group,
        columnsHidden = [],
        isNested
    } = props;
    const classes = useStyles();

    return (
        <>
            <div className={ classes.col } style={ {width: colWidth.col1, paddingRight: 0} }>
                <LightTooltip
                    enterTouchDelay={ 100 }
                    placement="right"
                    title={ (!label && marketHasItems) || marketLoading ? t('coin_not_found') : title }
                >
                    <div
                        style={ {
                            display: 'flex',
                            alignItems: 'center',
                            color: `${ label === '—' || title === '—' ? 'red' : '' }`
                        } }
                    >
                        <div className={ classes.imgWrap }>
                            { image
                              ? !isNested && (
                                <img src={ image } alt={ title } style={ {maxWidth: '100%', maxHeight: '100%'} } />
                            )
                              : !isNested &&
                                  (!marketHasItems || marketLoading ? (
                                      <Skeleton animation="wave" variant="circle" width={ 20 } height={ 20 } />
                                  ) : (
                                       <ErrorOutlineIcon
                                           style={ {maxWidth: '100%', maxHeight: '100%', color: 'red'} } />
                                   )) }
                        </div>
                        <div className={ classes.titleWrap }>
                            <div
                                style={ {
                                    opacity: !isNested ? 1 : 0.5
                                } }
                            >
                                { label ||
                                (!marketHasItems || marketLoading ? (
                                    <Skeleton
                                        animation="wave"
                                        height="1.429em"
                                        width="3.5em"
                                        style={ {marginBottom: 0} }
                                    />
                                ) : (
                                     '—'
                                 )) }
                            </div>
                            { !isNested && (
                                <div
                                    style={ {
                                        whiteSpace: 'nowrap',
                                        fontSize: '0.8em',
                                        marginTop: -5,
                                        color: '#888',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden'
                                    } }
                                >
                                    { title }
                                </div>
                            ) }
                        </div>
                    </div>
                </LightTooltip>
            </div>

            <div
                hidden={ columnsHidden.includes('quantity') }
                className={ classes.col }
                style={ {width: colWidth.col2, textAlign: 'right'} }
            >
                { quantity === 0 ? 0 : quantity.toFixed(8) }
            </div>

            <div
                hidden={ columnsHidden.includes('buyPrice') }
                className={ classes.col }
                style={ {
                    width: colWidth.col3,
                    textAlign: 'right'
                } }
            >
                { !Number.isNaN(buyPrice) && buyPrice && !isLoading
                  ? fiat === 'btc'
                    ? `${ buyPrice.toFixed(8) } ₿`
                    : fiat === 'usd' || fiat === 'eur'
                      ? `${ fiatSymbol } ${ decimalFormat(buyPrice, 2) }`
                      : `${ decimalFormat(buyPrice, 2) } ${ fiatSymbol }`
                  : '—' }
            </div>

            <div
                hidden={ columnsHidden.includes('price') }
                className={ classes.col }
                style={ {
                    position: 'relative',
                    width: colWidth.col4,
                    textAlign: 'right'
                } }
            >
                { errorText && (
                    <Tooltip
                        enterTouchDelay={ 100 }
                        title={ errorText }
                        placement="right-end"
                    >
                        <ErrorOutlineIcon className={ classes.error } />
                    </Tooltip>
                ) }

                { marketLoading && (
                    <div className={ classes.preloader }>
                        <CircularProgress className={ classes.progress } size={ 16 } disableShrink thickness={ 5 } />
                    </div>
                ) }

                <div className={ `${ classes.load } ${ marketLoading ? classes.loadActive : null }` }>
                    { !Number.isNaN(price) && price && !isLoading
                      ? fiat === 'btc'
                        ? `${ price.toFixed(8) } ₿`
                        : fiat === 'usd' || fiat === 'eur'
                          ? `${ fiatSymbol } ${ decimalFormat(price, 2) }`
                          : `${ decimalFormat(price, 2) } ${ fiatSymbol }`
                      : '—' }
                </div>
            </div>

            <div
                hidden={ columnsHidden.includes('change') }
                className={ `${ classes.col } ${
                    Number.isNaN(change) ? '' : change < 0 ? classes.textRed : classes.textGreen
                }` }
                style={ {
                    width: colWidth.col5,
                    textAlign: 'right',
                    position: 'relative'
                } }
            >

                { (!group || isNested) && change < -50 && (
                    <LightTooltip
                        enterTouchDelay={ 50 }
                        leaveTouchDelay={ 5000 }
                        placement="right"
                        title={ `-x${ Math.floor(1 / ((val / profit) * 0.0099 * change)) }`
                        }>
                        <div>
                            { !Number.isNaN(change) && change ? `${ change.toFixed(2) }%` : '—' }
                            <div className={ classes.indicator }>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#ff968e"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 533.333 533.333"
                                >
                                    <path
                                        d="M165.494,533.333c-35.545-73.962-16.616-116.343,10.703-156.272c29.917-43.728,37.627-87.013,37.627-87.013s23.518,30.573,14.11,78.39c41.548-46.25,49.389-119.938,43.115-148.159c93.914,65.63,134.051,207.737,79.96,313.054c287.695-162.776,71.562-406.339,33.934-433.775c12.543,27.435,14.922,73.88-10.416,96.42C331.635,33.333,225.583,0,225.583,0c12.543,83.877-45.466,175.596-101.404,244.13c-1.965-33.446-4.053-56.525-21.641-88.531C98.59,216.357,52.157,265.884,39.583,326.76C22.551,409.2,52.341,469.562,165.494,533.333z" />
                                </svg>
                            </div>
                        </div>
                    </LightTooltip>
                ) }

                { (!group || isNested) && change > 100 && (
                    <LightTooltip
                        enterTouchDelay={ 50 }
                        leaveTouchDelay={ 5000 }
                        placement="right"
                        title={ `x${ Math.floor((val / profit) * 0.0101 * change) }` }
                    >
                        <div>
                            { !Number.isNaN(change) && change ? `${ change.toFixed(2) }%` : '—' }
                            <div className={ classes.indicator }>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#61e024"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 533.333 533.333"
                                >
                                    <path
                                        d="M165.494,533.333c-35.545-73.962-16.616-116.343,10.703-156.272c29.917-43.728,37.627-87.013,37.627-87.013s23.518,30.573,14.11,78.39c41.548-46.25,49.389-119.938,43.115-148.159c93.914,65.63,134.051,207.737,79.96,313.054c287.695-162.776,71.562-406.339,33.934-433.775c12.543,27.435,14.922,73.88-10.416,96.42C331.635,33.333,225.583,0,225.583,0c12.543,83.877-45.466,175.596-101.404,244.13c-1.965-33.446-4.053-56.525-21.641-88.531C98.59,216.357,52.157,265.884,39.583,326.76C22.551,409.2,52.341,469.562,165.494,533.333z" />
                                </svg>
                            </div>
                        </div>
                    </LightTooltip>
                ) }

                { showIndicator && (
                    <div className={ classes.indicator }>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#ccc"
                            width="1em"
                            height="1em"
                            viewBox="0 0 533.333 533.333"
                        >
                            <path
                                d="M165.494,533.333c-35.545-73.962-16.616-116.343,10.703-156.272c29.917-43.728,37.627-87.013,37.627-87.013s23.518,30.573,14.11,78.39c41.548-46.25,49.389-119.938,43.115-148.159c93.914,65.63,134.051,207.737,79.96,313.054c287.695-162.776,71.562-406.339,33.934-433.775c12.543,27.435,14.922,73.88-10.416,96.42C331.635,33.333,225.583,0,225.583,0c12.543,83.877-45.466,175.596-101.404,244.13c-1.965-33.446-4.053-56.525-21.641-88.531C98.59,216.357,52.157,265.884,39.583,326.76C22.551,409.2,52.341,469.562,165.494,533.333z" />
                        </svg>
                    </div>
                ) }
            </div>

            <div
                hidden={ columnsHidden.includes('profit') }
                className={ `${ classes.col } ${
                    isLoading || Number.isNaN(profit) ? '' : profit < 0 ? classes.textRed : classes.textGreen
                }` }
                style={ {
                    width: colWidth.col6,
                    textAlign: 'right',
                } }
            >
                { !Number.isNaN(profit) && profit && !isLoading
                  ? fiat === 'btc'
                    ? `${ profit.toFixed(8) }`
                    : `${ decimalFormat(profit, 2) }`
                  : '—' }
            </div>

            <div
                hidden={ columnsHidden.includes('val') }
                className={ classes.col }
                style={ {
                    width: colWidth.col7,
                    textAlign: 'right'
                } }
            >
                { !Number.isNaN(val) && val && !isLoading
                  ? fiat === 'btc'
                    ? `${ val.toFixed(8) } ₿`
                    : fiat === 'usd' || fiat === 'eur'
                      ? `${ fiatSymbol } ${ decimalFormat(val, 2) }`
                      : `${ decimalFormat(val, 2) } ${ fiatSymbol }`
                  : '—' }
            </div>

            <div
                hidden={ columnsHidden.includes('wallet') }
                className={ classes.col }
                style={ {width: colWidth.col8, flexGrow: 1} }
            >
                <Typography component="div" noWrap className={ classes.typo }>
                    { wallet }
                </Typography>
            </div>

            { !group && <TablePopover buyFee={ buyFee } sellFee={ sellFee } date={ date } /> }
        </>
    );
});

TableRow.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        label: PropTypes.string,
        image: PropTypes.string,
        buyPrice: PropTypes.number,
        price: PropTypes.number,
        quantity: PropTypes.number,
        buyFee: PropTypes.number,
        sellFee: PropTypes.number,
        wallet: PropTypes.string,
        profit: PropTypes.number,
        change: PropTypes.number,
        val: PropTypes.number,
        showIndicator: PropTypes.bool
    }),
    marketLoading: PropTypes.bool,
    marketHasItems: PropTypes.bool,
    errorText: PropTypes.string,
    fiat: PropTypes.string.isRequired,
    fiatSymbol: PropTypes.string.isRequired,
    colWidth: PropTypes.object,
    group: PropTypes.bool,
    columnsHidden: PropTypes.array,
    isNested: PropTypes.bool
};

TableRow.defaultProps = {
    data: {
        title: '—',
        label: '—',
        buyPrice: 0,
        price: 0,
        quantity: 0,
        buyFee: 0,
        sellFee: 0,
        profit: 0,
        change: 0,
        val: 0
    },
    group: false,
    // columnsHidden: [],
    isNested: false,
    marketLoading: false,
    marketHasItems: false,
    errorText: '',
    colWidth: {},
    columnsHidden: []
};
