import React from 'react'
import styled from 'styled-components';
// import CanvasJS from 'canvasjs';
// import CanvasJSReact from "./canvasjs.react";
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Balance from './Balance';
import TotalValue from './TotalValue';

const PortfolioGraph = ({ coin, user, symbol, amount, wallet }) => {

    return (
        <PortfolioGraphDiv>
            <TotalValueContainer>
                <TotalValue wallet={wallet}/>
            </TotalValueContainer>

            <AssetsHeldContainer>
                <Balance wallet={wallet}/>
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
background-color: red;
position: relative;
`


const AssetsHeldContainer = styled.div`
max-height: 400px;
max-width: 400x;
width: 400px;
height: 400px;
background-color: green;
position: relative;
`