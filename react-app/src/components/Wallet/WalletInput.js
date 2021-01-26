import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PlusIcon from '../../imgs/plus.png';
import { getWallets } from '../../services/wallet';
import  Card  from './DeleteWallet';
import Background from '../Background/Background';
import Ethereum from '../../imgs/ethereum.png'
import Litecoin from '../../imgs/litecoin.png'
import SVG from '../../imgs/bitcoin-coin.svg'


const Container = styled.div`
width: 1200px;
height: 400px;
margin: 0 auto;
border-radius: 20px;
background-color: #191c28;
overflow-y: scroll;
max-height: 400px;
`

const Div = styled.div`
/* background-color: white; */
font-size: 20px;
color: white;
margin-left: 5px;
/* margin-bottom: 25px; */
/* width: 400px; */
opacity:0.65;
display: flex;
align-items: center;
justify-content: space-between;
`

const WalletNameDiv = styled.div`
:hover{
        opacity: 1;
		text-decoration: underline;
		color: white;
}
`

const WalletInput = ({ user }) => {
    const history = useHistory();
    const [wallets, setWallets] = useState([]);
    const onClick = () => {
        // console.log('Im working')
        history.push('/new-wallet')
    };


    const fetchWallets = async () => {
        const data = await getWallets({ user_id: user.id });
        setWallets(data.wallets);
    };

    useEffect(() => {
        fetchWallets();
    }, []);

    const walletItems = wallets.map((wallet) => {
        const handleClick = () => history.push(`/wallet/${wallet.id}`)
        return (
            <div key={wallet.id}>
                <Background />
                <Div>
                    <WalletNameDiv onClick={handleClick}>
                        {wallet.name}
                    </WalletNameDiv>    
                    <Card />
                </Div>
            </div>
        )
    });

    return (        
    <>
        <Container>
            <Header>
                Please Choose Your Wallet:
                <Icon onClick={onClick} />
            </Header>
                {walletItems}
        </Container>

            </>
    )
}

export default WalletInput


const Header = styled.h2`
/* margin: 0 auto; */
border-bottom: solid 1px #f0f0f5;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
color: white;
margin: 5px;
`

const Icon = styled.div`
background-image: url(${PlusIcon});
width: 30px;
height: 30px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`


