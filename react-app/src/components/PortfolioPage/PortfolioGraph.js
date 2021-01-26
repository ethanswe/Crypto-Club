import React from 'react'
import styled from 'styled-components';
import { RadialChart } from 'react-vis';
import Balance from './Balance';
import TotalValue from './TotalValue';
import { calculateQuantities } from '../util/index';
import { formatMoney } from '../util/index';

const PortfolioGraph = ({ coin, user, symbol, amount, wallet }) => {
    const coinQuantities = (calculateQuantities(wallet.transactions));
    let doughnutData = [];
    let totalQty = 0;
    
    for (let symbol in coinQuantities) {
        const qty = coinQuantities[symbol];
        totalQty += qty;
        const label = qty === 0 ? '' : symbol; 
        const doughnutEntry = { angle: qty, label }
        doughnutData.push(doughnutEntry);
    }
    
    const transactionItems = wallet.transactions.map((transaction) => {
        return (
            <TransactionItemDiv key={transaction.id}>
                <TransactionInfoDiv>
                    Date: 
                    {transaction.date}
                </TransactionInfoDiv>
                <TransactionInfoDiv>
                    Coin: 
                    {transaction.symbol}
                </TransactionInfoDiv>
                <TransactionInfoDiv>
                    Qty:
                    {transaction.quantity}
                </TransactionInfoDiv>
                <TransactionInfoDiv>
                    Price:
                    {formatMoney(transaction.price)}
                </TransactionInfoDiv>
                <TransactionInfoDiv>
                    {formatMoney(transaction.type, true)}
                </TransactionInfoDiv>
            </TransactionItemDiv>
        )
    })
    return (
        <PortfolioGraphDiv>
            <TotalValueContainer>
                <TotalValue wallet={wallet} />
                <ChartContainer>
                {(totalQty === 0) ? <h3>Please Make A Trade To Render Your Graph</h3> : 
                <RadialChart
                    data={doughnutData}
                    width={330}
                    height={330}
                    showLabels={true}
                    innerRadius={100}
                    radius={150}
                    padding={20}            
                />
                    }
            </ChartContainer>
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
height: 366px;
width: 400px;
overflow-y: scroll;

`

const TransactionItemDiv = styled.div`
display: inline-block;
padding: 10px;
height: 80px;
width: 400px;
border-bottom: 1px solid black;
`

const TransactionInfoDiv = styled.div`
/* padding-right: 2px; */
`

const ChartContainer = styled.div`
margin-left: 30px;
margin-top: 15px;
`