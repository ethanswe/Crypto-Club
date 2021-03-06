import React, { useState } from "react";
import styled from 'styled-components';
import PlusIconImg from '../../imgs/plus.png';
import MinusIconImg from '../../imgs/minus.png';
import Ethereum from '../../imgs/ethereum.png';
import Bitcoin from '../../imgs/bitcoin.png';
import Chainlink from '../../imgs/chainlink.png';
import BitcoinCash from '../../imgs/bitcoinCashGreen.png';
import Graph from '../../imgs/graph.png';
import Litecoin from '../../imgs/litecoin.png';
import Monero from '../../imgs/monero.png';
import Waves from '../../imgs/waves.png';
import { makePurchase, makeSale } from '../../services/transaction';
import AddToList from '../../imgs/whiteList.png';
import { addCoinToList } from '../../services/list';
import PositiveArrow from '../../imgs/greenUpArrow.png';
import NegativeArrow from '../../imgs/redDownArrow.png';
import { calculateQuantities } from '../util';
import { formatMoney } from '../util/index';
// Default export and save it to new variable makeSale makePurchase
const cryptoIcons = {
    'ETH': Ethereum,
    'GRT': Graph,
    'LINK': Chainlink,
    'WAVES': Waves,
    'LTC': Litecoin,
    'BTC': Bitcoin,
    'XMR': Monero,
    'BCH': BitcoinCash
};


const CoinItem = ({ coin, user, symbol, amount, wallet, fetchWallet }) => {
    const [buyForm, setBuyForm] = useState(false);
    const [sellForm, setSellForm] = useState(false);
    const {bid, ask, volume, high, low, open} = coin;
    const [quantity, setQuantity] = useState(0);
    const wallet_id = wallet.id;
    const price = coin.ask;
    const user_id = user.id;
    const change = (coin.ask - coin.open).toFixed(2)
    const changePercent = parseFloat(((coin.ask - coin.open) / coin.open)).toFixed(2);
    const ownedQuantity = calculateQuantities(wallet.transactions);


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

    const addToList = async (e) => {
        e.preventDefault();
        const addedCrypto = await addCoinToList({ symbol, user_id })
        if (!addedCrypto.error) {
            return alert('Successfully added to your list!')
        }
    }


    const onBuySubmit = async (e) => {
        e.preventDefault();
        if (wallet.balance < (quantity * price)) {
            return alert('You Do Not Have Enough Buying Power')
        }
        let type = (quantity * price) * -1;
        const purchase = await makePurchase({type, price, quantity, symbol, wallet_id})
        // console.log(purchase);
        if (!purchase.error) {
            setBuyForm(false);
            setQuantity(0);
            fetchWallet();
            return alert('Your Order Has Been Submitted')
        }

    }
    const onSellSubmit = async (e) => {
        e.preventDefault();
        if (ownedQuantity[symbol] < quantity) {
            return alert('You Do Not Have Enough To Sell')
        }
        let type = (quantity * price);
        const sell = await makeSale({type, price, quantity, symbol, wallet_id})
        // console.log(sell);
        if (!sell.error) {
            setSellForm(false);
            setQuantity(0);
            // set state on parent or self
            fetchWallet();
            return alert('Your Order Has Been Submitted')
        }
    }

    const updateAmount = (e) => {
        setQuantity(e.target.value)
    }


    return (
        <MainContainer>
            <CoinWrapper>
                <Container>
                    <TextDiv>
                        <Text>
                            <TestIcon image={cryptoIcons[symbol]} />
                        </Text>
                        <Text>
                            {symbol.toUpperCase()}
                        </Text>
                        <Text>
                                Ask: {formatMoney(ask)}
                        </Text>
                        <Text>
                                Bid: {formatMoney(bid)}
                        </Text>
                        <Text>
                                24H Volume: {volume}
                        </Text>
                        <Text>
                                24H High: {formatMoney(high)}
                        </Text>
                        <Text>
                                24H Low: {formatMoney(low)}
                        </Text>
                        <Text>
                                    {(change > 0) ? 
                                        <>
                                            24H Change:
                                            <PositiveDailyChange>
                                                {formatMoney(change)} / {changePercent}%
                                            </PositiveDailyChange>
                                            <PositiveArrowImg />
                                        </>
                                        : 
                                        <>
                                            24H Change:
                                            <NegativeDailyChange>
                                                {formatMoney(change)} / {changePercent}%
                                            </NegativeDailyChange>
                                            <NegativeArrowImg /> 
                                        </>
                                }
                        </Text>
                        <Text>
                            Your Current Coin Balance: {amount ? amount : 0}
                        </Text>
                        <Text>
                                <StyledListDiv>
                                    <ListIcon onClick={addToList}/>
                                </StyledListDiv>
                                <PlusIcon onClick={buyState}/>
                                <MinusIcon onClick={sellState} />
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

                                            <Button>Purchase</Button>
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
                                            <Button>Sell</Button>
                                        </form>
                                </div>
                            : null }
                            </Text>
                        </TextDiv>  
                </Container>
            </CoinWrapper>
    </MainContainer>
    )
};


export default CoinItem;

const Container = styled.div`
width: 350px;
height: 275px;
background-color: #111111;
color: white;
border-radius: 25px;
margin: 5px;
margin: 0 auto;
max-width: 800px;
margin-top: 10px;
`

const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`

const MainContainer = styled.div`
max-width: 1200px;
max-height: 1000px;
/* background-color: black; */
margin: 0 auto;
display: inline flex;
margin: 20px;
margin-left: 100px;
/* justify-content: space-around; */
`



const PlusIcon = styled.div`
background-image: url(${PlusIconImg});
width: 30px;
height: 30px;
margin-left: 35px;
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
margin-left: 35px;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`

const TestIcon = styled.div`
background-image: url(${props => props.image});
width: 53px;
height: 50px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`

const ListIcon = styled.div`
background-image: url(${AddToList});
width: 25px;
height: 25px;
background-size: cover;
:hover{
    opacity: 0.5;
}
`


const PositiveDailyChange = styled.div`
color: #90ee90;
`

const NegativeDailyChange = styled.div`
color: red;
`

const CoinWrapper = styled.div`

`

const TextDiv = styled.div`
position: relative;

`

const NegativeArrowImg = styled.div`
background-image: url(${NegativeArrow});
width: 15px;
height: 15px;
background-size: cover;
`

const PositiveArrowImg = styled.div`
background-image: url(${PositiveArrow});
width: 15px;
height: 15px;
background-size: cover;
`

const StyledListDiv = styled.div`
/* display: flex; */
margin-left: 5px;
`



const Button = styled.button`
  border-color: black;
  margin: 2px;
  margin-right: 25px;
  /* background-color: black; */
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  text-decoration: none;
  /* background: #222; */
  height: 20px;
  min-width: 80px;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 15px;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: black;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  
  &:hover {
    color: #fff;
    background: black;
    &:after {
      width: 110%;
    }
  }
`