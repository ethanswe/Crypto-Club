import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import PlusIconImg from '../../imgs/plus.png';
import MinusIconImg from '../../imgs/minus.png';
import Ethereum from '../../imgs/ethereum.png';
import Bitcoin from '../../imgs/bitcoin.png';
import Chainlink from '../../imgs/chainlink.png';
import BitcoinCash from '../../imgs/bitcoinCash.png';
import Graph from '../../imgs/graph.png';
import Litecoin from '../../imgs/litecoin.png';
import Monero from '../../imgs/monero.png';
import Waves from '../../imgs/waves.png';
import { getWallet } from '../../services/wallet'
import { makePurchase, makeSale } from '../../services/transaction';
import AddToList from '../../imgs/addToList.png';


const cryptoIcons = {
    'eth': Ethereum,
    'grt': Graph,
    'link': Chainlink,
    'waves': Waves,
    'ltc': Litecoin,
    'btc': Bitcoin,
    'xmr': Monero,
    'bch': BitcoinCash
};


const CoinItem = ({ coin, user, symbol, amount, wallet }) => {
    const [buyForm, setBuyForm] = useState(false);
    const [sellForm, setSellForm] = useState(false);
    const {bid, ask, volume, high, low, open} = coin;
    const [quantity, setQuantity] = useState(0);
    console.log(coin)
    const wallet_id = wallet.id;
    const price = coin.ask;

    // This is to show the daily change, if it's positive, the daily change will have green text, if it's negative it will have red text
    // const change = () => {
    //     let dailyChange = ((bid + ask) / 2) - open;
    //     if (dailyChange > 0) {
    //         return (
    //             <PositiveDailyChange>
    //                 {dailyChange}
    //             </PositiveDailyChange>
    //         )
    //     } else {
    //         return (
    //             <NegativeDailyChange>
    //                 {dailyChange}
    //             </NegativeDailyChange>
    //         )
    //     }
    // }

    const buyState = () => {
        if (buyForm === false) {
            setBuyForm(true)
        } else {
            setBuyForm(false)
        }
    }

    const sellState = () => {
        if (sellForm === false) {
            setSellForm(true);
        } else {
            setSellForm(false);
        }
    }

    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id })
    }

    const onBuySubmit = async (e) => {
        e.preventDefault();
        let type = (quantity * price) * -1;
        const purchase = await makePurchase({type, price, quantity, symbol, wallet_id})
        console.log(purchase);
        if (!purchase.error) {
            setBuyForm(false);
            setQuantity(0);
            return alert('Your Order Has Been Submitted')
        }

    }
    const onSellSubmit = async (e) => {
        e.preventDefault();
        let type = (quantity * price);
        const sell = await makeSale({type, price, quantity, symbol, wallet_id})
        console.log(sell);
        if (!sell.error) {
            setSellForm(false);
            setQuantity(0);
            return alert('Your Order Has Been Submitted')
        }

    }

    const updateAmount = (e) => {
        setQuantity(e.target.value)
    }

    const addCryptoToList = (e) => {
        console.log('working')
    }
    return (
    <MainContainer>
            <Container>
                <Text>
                    {symbol.toUpperCase()}
                    <TestIcon image={cryptoIcons[symbol]} />
                    <ListIcon onClick={addCryptoToList}/>
                </Text>
            <Text>
                    Ask: ${ask}
            </Text>
            <Text>
                    Bid: ${bid}
            </Text>
            <Text>
                    24H Volume: {volume}
            </Text>
            <Text>
                    24H High: ${high}
            </Text>
            <Text>
                    24H Low: ${low}
            </Text>
            <Text>
                Your Current Coin Balance: {amount ? amount : 0}
            </Text>
            <Text>
                    <PlusIcon onClick={buyState}/>
                    <MinusIcon onClick={sellState}/>
                </Text>
                <Text>
                    {buyForm ? 
                    <div>
                        <form onSubmit={onBuySubmit}>
                                <label>
                                    Buy {symbol.toUpperCase()}?
                                </label>
                                <input
                                    onChange={updateAmount}
                                    value={quantity}
                                    type="number"
                                    placeholder={'Purchase Amount'}
                                />

                                <button>Purchase</button>
                        </form>
                    </div>
                    : null}
                </Text>
                <Text>
                    {sellForm ? 
                        <div>
                            <form onSubmit={onSellSubmit}>
                                <label>
                                    Sell {symbol.toUpperCase()}?
                                </label>
                                <input
                                    onChange={updateAmount}
                                    value={quantity}
                                    type="number"
                                    placeholder={'Sale Amount'}
                                />
                                <button>Sell</button>
                            </form>
                    </div>
                : null }
                </Text>
        </Container>
    </MainContainer>
    )
};


export default CoinItem;

const Container = styled.div`
width: 350px;
height: 250px;
background-color: gray;
color: white;
border-radius: 25px;
margin: 5px;
margin: 0 auto;
max-width: 800px;
`

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`

const MainContainer = styled.div`
width: 1000px;
`



const PlusIcon = styled.div`
background-image: url(${PlusIconImg});
width: 30px;
height: 30px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`
const MinusIcon = styled.div`
background-image: url(${MinusIconImg});
width: 25px;
height: 25px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`

const TestIcon = styled.div`
background-image: url(${props => props.image});
width: 70px;
height: 50px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`

const ListIcon = styled.div`
background-image: url(${AddToList});
width: 30px;
height: 30px;
background-size: cover;
:hover{
    opacity: 0.5;
}
`


const PositiveDailyChange = styled.div`
color: green;
`

const NegativeDailyChange = styled.div`
color: red;
`