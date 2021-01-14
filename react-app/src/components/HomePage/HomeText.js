import React from 'react'
import styled from 'styled-components';
import SignUpButton from './SignupButton';

const HomeText = () => {
    return (
        <Container>
            <Header>Finiancial Freedom Is Measured In Binary Code: Bitcoin.</Header>    
            <h2>We believe that the future history of financial instutions will include Blockchain technology and Bitcoin. What are you waiting for? Be a part of history: Trade now.</h2>
            <SignUpButton />
        </Container>
    )
}

export default HomeText;


const Header = styled.h1`
font-size: 40px;
color: white;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */
max-width: 300px;
font-family: 'Cinzel', serif;
`



const IntroText = styled.h2`

`

const Container = styled.div`
z-index: 10;
padding: 1rem;
padding-left: 250px;
padding-top: 150px;
width: 500px;
h1{
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
}
&:nth-of-type(1){
    font-size: 1rem;
    font-weight: 700;
    color: white;
}
`