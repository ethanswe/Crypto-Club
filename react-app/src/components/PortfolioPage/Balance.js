import React from 'react'
import styled from 'styled-components';
import { formatMoney } from '../util/index';
const Balance = ({ wallet }) => {
    const balance = wallet.balance;
    return (
        <div>
            <Header> Available Cash: </Header>
            <BalanceDiv>{formatMoney(balance)}</BalanceDiv>
        </div>
    )
}

export default Balance

const Header = styled.h2`
font-size: 12px;
/* border-bottom: 1px solid black; */
margin: 0 auto;
display: flex;
justify-content: center;
`

const BalanceDiv = styled.div`
color: green;
font-size: 15px;
border-bottom: 1px solid black;
margin: 0 auto;
display: flex;
justify-content: center;
`