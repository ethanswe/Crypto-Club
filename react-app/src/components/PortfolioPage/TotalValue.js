import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { getCoins } from '../../services/coin';
import { calculateQuantities, CRYPTO_SYMBOLS } from '../util';



const TotalValue = ({ wallet }) => {
    const [coinValues, setCoinValues] = useState({})
    const quantities = calculateQuantities(wallet.transactions);
    // {eth: 2}
    const fetchCoins = async () => {
        const data = await getCoins(CRYPTO_SYMBOLS)
        const fetchedCoinValues = {}
        for (let i = 0; i < data.coins.length; i++){
            let coin = data.coins[i]
            let value = (coin.ask);
            let symbol = CRYPTO_SYMBOLS[i]
            fetchedCoinValues[symbol] = value;
        }
        setCoinValues(fetchedCoinValues);
    }
    useEffect(() => {
        fetchCoins(); 
    }, []);
    
    let totalValue = 0;
    for (let symbol in coinValues) {
        symbol = symbol.toUpperCase();
        let value = coinValues[symbol] * quantities[symbol]
        totalValue += value;
    }

    const profitLoss = ((wallet.balance + totalValue) - wallet.startingBalance)
    return (
        <div>
            <Header>Your P/L / Total Value:</Header>
            <div>
                {(profitLoss >= 0) ?
                    <>
                        <PositivePL>
                            ${profitLoss.toFixed(2)} / ${(totalValue + wallet.balance).toFixed(2)}
                        </PositivePL>
                    </>
                    :
                    <>
                        <NegativePL>
                            ${profitLoss.toFixed(2)}
                        </NegativePL>
                    </>
                }
            </div>
        </div>
    )
};


export default TotalValue

const PositivePL = styled.div`
color: green;
font-size: 15px;
border-bottom: 1px solid black;
margin: 0 auto;
display: flex;
justify-content: center;
`

const NegativePL = styled.div`
color: red;
font-size: 15px;
border-bottom: 1px solid black;
margin: 0 auto;
display: flex;
justify-content: center;
`

const Header = styled.h2`
font-size: 12px;
/* border-bottom: 1px solid black; */
margin: 0 auto;
display: flex;
justify-content: center;
`