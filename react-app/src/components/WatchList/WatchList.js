import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getList } from '../../services/list';
import { getCoins } from '../../services/coin';
import { formatMoney } from '../util/index';
const WatchList = ({ user }) => {
    const [coins, setCoins] = useState([])

    const fetchCoins = async () => {
        const data = await getList({ user_id: user.id });
        const symbols = data.coins.map((coin) => coin.symbol);
        const response = await getCoins(symbols);
        const coinData = response.coins.map((coin, idx) => {
            const newCoin = { ...coin };
            newCoin.symbol = symbols[idx];
            newCoin.name = data.coins[idx].name;
            return newCoin
        });
        setCoins(coinData)
        // console.log(coinData)
    };


    useEffect(() => {
        fetchCoins({ user_id: user.id });
    }, [])

    // console.log(coins);
    const coinItems = coins.map((coin, idx) => {
        return (
            <WatchlistContainer key={idx}>
                <Name>
                    Name: {coin.name}
                </Name>
                <Symbol>
                    Symbol: {coin.symbol}
                </Symbol>
                <Ask>
                    Current Ask: {formatMoney(coin.ask)}
                </Ask>
            </WatchlistContainer>
        )
    })

    return (
        <WatchListDiv>
            <Header>Crypto Watch List:</Header>
            {coinItems.length ? coinItems : <h3>Please Add A Coin To Your WatchList</h3>}
        </WatchListDiv>
    )
}

export default WatchList


const WatchListDiv = styled.div`
border: 1px solid black;
background-color: white;
width: 600px;
height: 400px;
margin: 0 auto;
`

const Header = styled.h1`
font-size: 20px;
color: black;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
border-bottom: 1px solid black;
/* background-color: black; */
max-width: 400px;
font-family: 'Cinzel', serif;
`

const Ask = styled.div`
margin-left: 10px;
margin-top: 10px;
`

const Symbol = styled.div`
margin-left: 10px;
margin-top: 10px;
`

const Name = styled.div`
margin-left: 10px;
margin-top: 10px;
`

const WatchlistContainer = styled.div`
border-bottom: 1px solid black;

`