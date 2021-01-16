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

