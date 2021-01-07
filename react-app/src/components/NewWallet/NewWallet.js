import React from 'react'
import WalletInput from './NewWalletInput';
import styled from 'styled-components';

const Container = styled.div`
height: 800px;
width: 800px;
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 50px;
`

const NewWallet = () => {
    return (
        <Container>
            <WalletInput />
        </Container>
    )
}

export default NewWallet
