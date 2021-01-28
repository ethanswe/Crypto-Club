import React from 'react'
import styled from 'styled-components';
import SignUpButton from './SignupButton';

const HomeText = () => {
    return (
        <Container>  
            <Header>Finiancial Freedom Is Measured In Binary Code: Bitcoin.</Header>    
            <IntroText>We believe that the future history of financial instutions will include Blockchain technology and Bitcoin. What are you waiting for? Be a part of history: Trade now with Crypto Club.</IntroText>
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
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`



const IntroText = styled.h2`
color: white;
font-size: 20px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Container = styled.div`
z-index: 10;
padding: 1rem;
padding-left: 250px;
padding-top: 150px;
width: 500px;
height: 355px;
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