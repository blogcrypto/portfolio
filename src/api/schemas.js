import { v4 as uuidv4 } from 'uuid';

export const schemaSpreadsheet = data => {
    const editedData = [];

    for (let i = 1; i < data.length; i++) {
        if (data[i].length) {
            editedData.push(data[i]);
        } else break;
    }

    return editedData.map(item => ({
        id: uuidv4(),
        title: item[0],
        buyPrice: parseFloat(item[2].replace(',', '.')),
        quantity: parseFloat(item[1].replace(/\s+/g, '').replace(',', '.')),
        buyFee: parseFloat(item[3].replace(',', '.')) || 0,
        sellFee: parseFloat(item[4].replace(',', '.')) || 0,
        wallet: item[5],
        notes: item[6]
    }));
};

export const schemaMarket = data => data.map(item => ({
    title: item.name,
    label: item.symbol.toUpperCase(),
    price: item.current_price,
    image: item.image
}));
