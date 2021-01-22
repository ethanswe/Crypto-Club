import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';
import CoinItem  from './CoinItem';
import { PortfolioNavigation } from '../PortfolioNavigation/PortfolioNavigation';
import styled from 'styled-components';
import Background from '../Background/Background';
import { CRYPTO_SYMBOLS, calculateQuantities } from '../util';

const CoinPage = ({ user, wallet }) => {
    const [coins, setCoins] = useState([]);

    const amount = calculateQuantities(wallet.transactions);

    const fetchCoins = async () => {
        const data = await getCoins(CRYPTO_SYMBOLS);
        console.log(data)
        setCoins(data.coins);
    };
    console.log(coins);
    
    useEffect(() => {
        fetchCoins();
    }, []);

    let coinItems = coins.map((coin, idx) => {
        let symbol = CRYPTO_SYMBOLS[idx];

        return (
            <CoinItem key={idx} wallet={wallet} symbol={symbol} coin={coin} user={user} amount={amount[symbol.toUpperCase()]}/>
        );
    });
    
    return (
        <>
        <Background />
        <div>
            <PortfolioNavigation />
        </div>
        <CoinItemDiv>
            {coinItems} 
        </CoinItemDiv>
        </>
    )
};


export default CoinPage


const CoinItemDiv = styled.div`
margin-top: 100px;
`