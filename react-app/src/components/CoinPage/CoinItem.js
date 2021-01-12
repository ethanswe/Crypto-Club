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
    const [balance, setBalance] = useState(null);
    const [buyForm, setBuyForm] = useState(false);
    const {bid, ask, volume, high, low, pairs} = coin;
    const buyFormFunc = () => {
        setBuyForm(true)
        console.log(buyForm)
        if (buyForm === true) {
            return (
                <div>
                    <form>
                        <label>Buy?</label>
                    </form>
                </div>
            )
        }
    }
    const { wallet_id } = useParams();
    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id })
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
                    <PlusIcon onClick={buyFormFunc}/>
                    <MinusIcon />
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