import React, { useState } from "react";
import styled from 'styled-components'
import WalletInput from './WalletInput';

const Container = styled.div`
height: 800px;
width: 800px;
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 50px;
`


const Test = () => {
    return (
        <Container>
            <h1>Please Select Your Wallet:</h1>
            <WalletInput />
        </Container>
    )
}

export default Test;