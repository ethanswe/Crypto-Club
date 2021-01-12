import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import PlusIconImg from '../../imgs/plus.png';
import MinusIconImg from '../../imgs/minus.png';
import { getWallet } from '../../services/wallet'

const CoinItem = ({ coin, user}) => {
    const [balance, setBalance] = useState(null);
    const {bid, ask, volume, high, low, pairs} = coin;
    const plusOnClick = async (e) => {

    }
    const { wallet_id } = useParams();

    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id })
    }
    
    return (
    <MainContainer>
        <Container>
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
                Your Available Cash Balance: 
            </Text>
            <Text>
                Your Current Coin Balance: 
            </Text>
            <Text>
                    <PlusIcon onClick={plusOnClick}/>
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
background-color: #141414;
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