import { sortStr } from './utils';

const calcProfit = (priceSell, priceBuy, quantity, buyFee, sellFee) => {
    return (
        priceSell * quantity -
        ((priceSell * quantity) / 100) * sellFee -
        (priceBuy * quantity + ((priceBuy * quantity) / 100) * buyFee)
    );
};

const calcChange = (priceSell, priceBuy, quantity) => {
    return ((priceSell * quantity - priceBuy * quantity) * 100) / (priceBuy * quantity);
};

export const sortTableRows = (arr = [], sortBy, order) => {

    const sortedArr = arr.sort((a, b) => {
        if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
            return sortStr(a[sortBy], b[sortBy]);
        }
        if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
            return a[sortBy] - b[sortBy];
        }
        // eslint-disable-next-line no-console
        return console.error(`Not valid format data ${a} or ${b} for sortTableRows!`);
    });
    return order === 'asc' ? sortedArr.reverse() : sortedArr;
};

export const compileTableData = (
    tableData,
    marketItems = [
        {
            title: 'Bitcoin',
            label: 'BTC',
            price: 0,
            image: ''
        },
        {
            title: 'Tether',
            label: 'USDT',
            price: 0,
            image: ''
        }
    ],
    currency,
    sortBy,
    sortOrder
) => {
    const btcInUsd = marketItems.filter((coin) => coin.title.toLowerCase() === 'tether')[0].price;
    const btcCurrentPrice = marketItems.filter((coin) => coin.title.toLowerCase() === 'bitcoin')[0].price;

    const extendRawData = (rawData) =>
        rawData.map((item) => {
            return {
                ...item,
                label: item.label || '',
                quantity: item.quantity || 0,
                buyPrice:
                    currency.value === 'btc'
                        ? item.title.toLowerCase() === 'bitcoin'
                            ? item.buyPrice * btcInUsd
                            : item.buyPrice
                        : item.title.toLowerCase() === 'bitcoin'
                        ? (item.buyPrice * btcCurrentPrice) / (btcCurrentPrice / btcInUsd)
                        : item.buyPrice * btcCurrentPrice,
                price: item.price || 0,
                profit:
                    currency.value === 'btc'
                        ? item.title.toLowerCase() === 'bitcoin'
                            ? calcProfit(item.price, item.buyPrice * btcInUsd, item.quantity, item.buyFee, item.sellFee)
                            : calcProfit(
                                  item.price / btcCurrentPrice,
                                  item.buyPrice,
                                  item.quantity,
                                  item.buyFee,
                                  item.sellFee
                              )
                        : item.title.toLowerCase() === 'bitcoin'
                        ? calcProfit(item.price, item.buyPrice * btcInUsd, item.quantity, item.buyFee, item.sellFee)
                        : calcProfit(
                              item.price,
                              item.buyPrice * btcCurrentPrice,
                              item.quantity,
                              item.buyFee,
                              item.sellFee
                          ),
                change:
                    currency.value === 'btc'
                        ? item.title.toLowerCase() === 'bitcoin'
                            ? calcChange(
                                  btcCurrentPrice,
                                  item.buyPrice * btcInUsd,
                                  item.quantity,
                                  item.buyFee,
                                  item.sellFee
                              )
                            : calcChange(
                                  item.price / btcCurrentPrice,
                                  item.buyPrice,
                                  item.quantity,
                                  item.buyFee,
                                  item.sellFee
                              )
                        : item.title.toLowerCase() === 'bitcoin'
                        ? calcChange(item.price, item.buyPrice * btcInUsd, item.quantity, item.buyFee, item.sellFee)
                        : calcChange(
                              item.price,
                              item.buyPrice * btcCurrentPrice,
                              item.quantity,
                              item.buyFee,
                              item.sellFee
                          ),
                val:
                    currency.value === 'btc'
                        ? (item.price / btcCurrentPrice) * item.quantity
                        : item.price * item.quantity
            };
        });

    const rawDataExtended = extendRawData(tableData);
    /**
     * Define groups
     */
    const currencyListWCount = rawDataExtended.reduce((acc, cur) => {
        if (!acc[cur.title]) {
            acc[cur.title] = 1;
        } else {
            acc[cur.title] += 1;
        }
        return acc;
    }, {});

    const tableArr = [];

    Object.keys(currencyListWCount).forEach((key) => {
        /**
         * Collect data for group header
         */
        if (currencyListWCount[key] > 1) {
            const groupArr = [];
            let groupLabel = '';
            const sum = {
                quantity: 0,
                buyPrice: 0,
                val: 0,
                profit: 0,
                change: 0
            };
            let indicators = 0;

            rawDataExtended.forEach((item) => {
                if (item.title === key) {
                    groupLabel = item.label;
                    groupArr.push(item);
                    sum.buyPrice += (item.buyPrice || 0) * item.quantity;
                    sum.quantity += item.quantity;
                    sum.profit += item.profit || 0;
                    sum.change += item.change * item.quantity || 0;
                    sum.val += item.val || 0;
                    sum.feeBuy += item.feeBuy || 0;
                    sum.feeSell += item.feeSell || 0;
                    indicators += item.change < -50 || item.change > 100 ? 1 : 0;
                }
            });
            /**
             * Joining wallets group items
             */
            const walletList = groupArr.reduce((acc, curr) => {
                if (!acc.includes(curr.wallet) && curr.wallet) {
                    acc.push(curr.wallet);
                }
                return acc;
            }, []);

            if (sortBy === 'wallet') {
                walletList.sort((a, b) => {
                    return sortStr(a, b);
                });

                if (sortOrder === 'asc') walletList.reverse();
            }

            tableArr.push({
                title: key,
                label: groupLabel,
                image: marketItems.filter((i) => i.title.toLowerCase() === key.toLowerCase())[0]?.image,
                buyPrice: sum.buyPrice / sum.quantity,
                quantity: sum.quantity,
                val: sum.val,
                price:
                    currency.value === 'btc'
                        ? marketItems.filter((i) => i.title.toLowerCase() === key.toLowerCase())[0]?.price /
                          btcCurrentPrice || 0
                        : marketItems.filter((i) => i.title.toLowerCase() === key.toLowerCase())[0]?.price || 0,
                profit: sum.profit,
                change: (sum.profit * 100) / ((sum.buyPrice / sum.quantity) * sum.quantity),
                wallet: walletList.join(', '),
                showIndicator: indicators === groupArr.length,
                group: sortTableRows(groupArr, sortBy, sortOrder)
            });
        } else {
            /**
             * Data for a non-grouped row
             */
            rawDataExtended.forEach((item) => {
                if (item.title === key) {
                    tableArr.push(item);
                }
            });
        }
    });

    return tableArr;
};
