export const schemaSpreadsheet = data => data.map(item => ({
    id: item.id.$t.split('/').pop(),
    title: item.gsx$title.$t,
    buyPrice: parseFloat(item.gsx$price.$t.replace(',', '.')),
    quantity: parseFloat(item.gsx$quantity.$t.replace(/\s+/g, '').replace(',', '.')),
    buyFee: parseFloat(item.gsx$buyfee.$t.replace(',', '.')) || 0,
    sellFee: parseFloat(item.gsx$sellfee.$t.replace(',', '.')) || 0,
    wallet: item.gsx$wallet.$t,
    date: item.gsx$date?.$t
}));

export const schemaMarket = data => data.map(item => ({
    title: item.name,
    label: item.symbol.toUpperCase(),
    price: item.current_price,
    image: item.image
}));
