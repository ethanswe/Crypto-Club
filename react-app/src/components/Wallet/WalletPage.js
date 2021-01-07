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

const WalletPage = ({ user }) => {
    return (
        <Container>
            <WalletInput user={user} />
        </Container>
    )
}

export default WalletPage;