import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';
import CoinItem  from './CoinItem';

const CoinPage = () => {
    const [coins, setCoins] = useState({});

    const fetchCoins = async () => {
        const data = await getCoins(['eth', 'bch', 'link', 'btc', 'ltc', 'xmr', 'grt', 'waves']);

        setCoins(data);
    };
    
    useEffect(() => {
        fetchCoins();
    }, []);

    let coinItems = Object.values(coins).map((coin, idx) => {
        return (
            <CoinItem coin={coin} />
        );
    });
    
    return (
        <div>
            {coinItems}
        </div>
    )
};


export default CoinPage
