import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PlusIcon from '../../imgs/plus.png';
import { getWallets } from '../../services/wallet';


const Container = styled.div`
width: 1200px;
height: 700px;
margin: 0 auto;
border-radius: 20px;
background-color: #191c28;
`

const Div = styled.div`
/* background-color: white; */
font-size: 20px;
color: white;
margin-left: 5px;
margin-bottom: 25px;
width: 400px;
opacity:0.65;
:hover{
        opacity:1;
        text-decoration: underline;
}
`

const WalletInput = ({ user }) => {
    const history = useHistory();
    const [wallets, setWallets] = useState([]);
    console.log(wallets)
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
        return <Div key={wallet.id} onClick={handleClick}>
                {wallet.name}
            </Div>
        
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


