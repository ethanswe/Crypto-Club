export const CRYPTO_SYMBOLS = ['ETH', 'BCH', 'LINK', 'BTC', 'LTC', 'XMR', 'GRT', 'WAVES'];

export const calculateQuantities = (transactions) => {
    const quantities = {}
    for (let i = 0; i < CRYPTO_SYMBOLS.length; i++){
        let ele = CRYPTO_SYMBOLS[i];
        quantities[ele] = 0;
    }

    for (let i = 0; i < transactions.length; i++){
        let tx = transactions[i];

        if (tx.type > 0) {
            quantities[tx.symbol] -= tx.quantity;
        } else {
            quantities[tx.symbol] += tx.quantity;
        }
    }
    return quantities;
};

export const formatMoney = (amount, signed=false) => {
    let sign = ''
    if (amount > 0) {
        sign = '+';
    } else if (amount < 0) {
        sign = '-';
    }
    sign = signed ? sign : '';
    let str = String(Math.abs(amount));
    if (!str.includes('.')) {
        str += '.00';
    }

    const [ dollars, cents ] = str.split('.');
    const formattedCents = cents.slice(0, 2);
    let formattedDollars = '';
    const reversedDollars = dollars.split('').reverse().join('');
    for (let i = 0; i < reversedDollars.length; i++){
        if (i % 3 === 0) {
            formattedDollars =reversedDollars[i]  + ',' + formattedDollars;
        } else {
            formattedDollars = reversedDollars[i] + formattedDollars;
        }
    }
    formattedDollars = formattedDollars[0] === ',' ? formattedDollars.slice(1) : formattedDollars;
    return '$' + sign + formattedDollars.slice(0, -1) + '.' + formattedCents;
};