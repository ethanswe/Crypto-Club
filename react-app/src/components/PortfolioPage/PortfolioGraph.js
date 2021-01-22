import React from 'react'
import styled from 'styled-components';
import { RadialChart } from 'react-vis';
import Balance from './Balance';
import TotalValue from './TotalValue';
import { calculateQuantities } from '../util/index';

const PortfolioGraph = ({ coin, user, symbol, amount, wallet }) => {
    const coinQuantities = (calculateQuantities(wallet.transactions));
    let doughnutData = [];
    
    for (let symbol in coinQuantities) {
        const qty = coinQuantities[symbol];
        const doughnutEntry = { angle: qty, label: symbol }
        doughnutData.push(doughnutEntry);
    }
    const transactionItems = wallet.transactions.map((transaction) => {
        return (
            <div key={transaction.id}>
                <div>
                    {transaction.symbol}
                </div>
                <div>
                    {transaction.quantity}
                </div>
            </div>
        )
    })
    return (
        <PortfolioGraphDiv>
            <TotalValueContainer>
                <TotalValue wallet={wallet} />
                <RadialChart
                    data={doughnutData}
                    width={300}
                    height={300}
                    showLabels={true}
                    innerRadius={100}
                    radius={150}
                    padding={20}

            
                />

            </TotalValueContainer>
            
            <AssetsHeldContainer>
                <Balance wallet={wallet} />
                <TransactionItemsList>
                    {transactionItems}
                </TransactionItemsList>
            </AssetsHeldContainer>
        </PortfolioGraphDiv>
    )
}

export default PortfolioGraph


const PortfolioGraphDiv = styled.div`
border: 1px solid black;
height: 400px;
width: 800px;
margin: 0 auto;
display:flex;
`

const TotalValueContainer = styled.div`
max-height: 400px;
max-width: 400x;
width: 400px;
height: 400px;
/* background-color: red; */
background-color: white;
position: relative;
`


const AssetsHeldContainer = styled.div`
max-height: 400px;
max-width: 400x;
width: 400px;
height: 400px;
background-color: white;
border-left: 1px solid black;
position: relative;
`


const TransactionItemsList = styled.div`
max-height: 366px;
max-width: 400x;
overflow-y: scroll;
`