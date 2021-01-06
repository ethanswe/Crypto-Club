import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
background-color: red;
width: 100vw;
left: 0;
height: 650px;
`

const Header = styled.h1`
font-size: 40px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */
max-width: 300px;
`

const TextDiv = styled.div`
/* background-color: black; */
width: 600px;
height: 450px;
padding: 100px;
margin-left: 150px;
`

const BottomDiv = styled.div`
background-color: blue;
width: 100vw;
height: 500px;
`
const MainDiv = () => {
    return (
        <>
        <MainContainer>
            <TextDiv>
                <Header>Finiancial Freedom Is Measured In Binary Code: Bitcoin</Header>    
            </TextDiv>
        </MainContainer>
        <BottomDiv />    
        </>
    )
}

export default MainDiv
