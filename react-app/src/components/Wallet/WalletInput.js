import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PlusIcon from '../../imgs/plus.png';
const Container = styled.div`
width: 1200px;
height: 700px;
margin: 0 auto;
border-radius: 20px;
background-color: #191c28;
`


const WalletInput = () => {
    const history = useHistory();

    const onClick = () => {
        // console.log('Im working')
        history.push('/new-wallet')
    }

     return (
        <Container>
            <Header>
                Please Choose Your Wallet:
            <Icon onClick={onClick} />
            </Header>
        </Container>
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
`


