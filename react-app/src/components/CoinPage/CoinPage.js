import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';
import CoinItem  from './CoinItem';

const CRYPTO_SYMBOLS = ['eth', 'bch', 'link', 'btc', 'ltc', 'xmr', 'grt', 'waves'];

const CoinPage = ({ user, wallet }) => {
    const [coins, setCoins] = useState([]);
    const amount = {};
    wallet.transactions.forEach(tx => {
        if (!(tx.symbol in amount)) {
            amount[tx.symbol] = 0;
        }

        if (tx.type < 0) {
            amount[tx.symbol] += tx.quantity
            
        } else {
            amount[tx.symbol] -= tx.quantity
        }
    });
    console.log(amount);
    const fetchCoins = async () => {
        const data = await getCoins(CRYPTO_SYMBOLS);
        console.log(data)
        setCoins(data.coins);
    };
    
    useEffect(() => {
        fetchCoins();
    }, []);

    let coinItems = coins.map((coin, idx) => {
        let symbol = CRYPTO_SYMBOLS[idx];

        return (
            <CoinItem symbol={symbol} coin={coin} user={user} amount={amount[symbol.toUpperCase()]}/>
        );
    });
    
    return (
        <div>
            {coinItems}
        </div>
    )
};


export default CoinPage
