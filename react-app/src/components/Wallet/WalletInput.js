import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 1200px;
height: 700px;
margin: 0 auto;
border-radius: 20px;
background-color: #F9F9F3;
`


const WalletInput = () => {
    return (
        <Container>
            <Header>
                Please Choose Your Wallet:
            </Header>
        </Container>
    )
}

export default WalletInput


const Header = styled.h2`
margin: 0 auto;
border-bottom: solid 1px #f0f0f5;
display: flex;
justify-content: center;
`