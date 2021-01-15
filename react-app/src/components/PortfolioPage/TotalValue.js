import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const TotalValue = ({ wallet }) => {
    const profitLoss = (wallet.startingBalance - wallet.balance)
    return (
        <div>
            <Header>Your P/L:</Header>
            <div>
                {(profitLoss > 0) ? 
                    <>
                        <PositivePL>
                            ${profitLoss}
                        </PositivePL>
                    </>
                    :
                    <>
                        <NegativePL>
                            ${profitLoss}
                        </NegativePL>
                    </>
            
            }
            </div>
        </div>
    )
}

export default TotalValue

const PositivePL = styled.div`
color: lightgreen;
font-size: 15px;
border-bottom: 1px solid black;
margin: 0 auto;
display: flex;
justify-content: center;
`

const NegativePL = styled.div`
color: red;
font-size: 15px;
border-bottom: 1px solid black;
margin: 0 auto;
display: flex;
justify-content: center;
`

const Header = styled.h2`
font-size: 12px;
/* border-bottom: 1px solid black; */
margin: 0 auto;
display: flex;
justify-content: center;
`