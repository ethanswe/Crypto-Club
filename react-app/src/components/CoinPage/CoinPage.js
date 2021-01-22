import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';
import CoinItem  from './CoinItem';
import { PortfolioNavigation } from '../PortfolioNavigation/PortfolioNavigation';
import styled from 'styled-components';
import Background from '../Background/Background';
import { CRYPTO_SYMBOLS, calculateQuantities } from '../util';
import { useParams } from 'react-router-dom';
import { getWallet } from '../../services/wallet';

const CoinPage = ({ user, wallet, setWallet }) => {
    const [coins, setCoins] = useState([]);
    const { wallet_id } = useParams();
    console.log(wallet);
    console.log(wallet_id);
    const amount = calculateQuantities(wallet.transactions);

    const fetchCoins = async () => {
        const data = await getCoins(CRYPTO_SYMBOLS);
        setCoins(data.coins);
    };
    
    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id });
        setWallet(data);
    };
    
    useEffect(() => {
        fetchCoins();
        fetchWallet();
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