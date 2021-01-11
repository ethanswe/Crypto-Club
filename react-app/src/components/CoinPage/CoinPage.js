import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';
import CoinItem  from './CoinItem';

const CoinPage = ({ user}) => {
    const [coins, setCoins] = useState({});
    console.log(coins)
    const fetchCoins = async () => {
        const data = await getCoins(['eth', 'bch', 'link', 'btc', 'ltc', 'xmr', 'grt', 'waves']);

        setCoins(data);
    };
    
    useEffect(() => {
        fetchCoins();
    }, []);

    let coinItems = Object.values(coins).map((coin, idx) => {
        return (
            <CoinItem coin={coin} user={user}/>
        );
    });
    
    return (
        <div>
            {coinItems}
        </div>
    )
};


export default CoinPage
