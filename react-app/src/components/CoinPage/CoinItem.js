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
import { makePurchase } from '../../services/transaction';
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


const CoinItem = ({ coin, user, symbol, amount }) => {
    const [buyForm, setBuyForm] = useState(false);
    const {bid, ask, volume, high, low} = coin;
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null);

    const buyState = () => {
        if (buyForm === false) {
            setBuyForm(true)
        } else {
            setBuyForm(false)
        }
    }
    const { wallet_id } = useParams();
    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id })
    }

    const onBuySubmit = (e) => {
        e.preventDefault();
        let type = (purchaseAmount * purchasePrice)
        const purchase = makePurchase(type, price, quantity, coin_id, wallet_id)
        if (!purchase.error) {
            setBuyForm(false);
            return alert('Your Order Has Been Submitted')
            setPrice(null);
            setQuantity(null);
        }

    }

    const updatePurchasePrice = (e) => {
        setPrice(e.target.value)
    }
    const updatePurchaseAmount = (e) => {
        setQuantity(e.target.value)
    }


    const submitPurchase = (e) => {

    }
    return (
    <MainContainer>
            <Container>
                <Text>
                    {symbol.toUpperCase()}
                    <TestIcon image={cryptoIcons[symbol]}/>
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
                    <MinusIcon />
                </Text>
                <Text>
                    {buyForm ? 
                    <div>
                        <form onSubmit={onBuySubmit}>
                                <label>
                                    Buy {symbol.toUpperCase()}?
                                </label>
                                <input
                                    onChange={updatePurchaseAmount}
                                    value="quantity"
                                    placeholder={'Amount to  Purchase'}
                                />
                                <input
                                    onChange={updatePurchasePrice}
                                    value="price"
                                    placeholder={'Purchase Price?'}
                                />
                                <button>Purchase</button>
                        </form>
                    </div>
                    : null}
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