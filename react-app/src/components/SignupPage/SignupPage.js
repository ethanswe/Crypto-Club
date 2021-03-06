import React from 'react'
import SignupBackground from '../../imgs/signupPage.jpeg';
import styled from 'styled-components';
import Photo from './Photo';
import SideInput from './SideInput';

const SignupPage = ({ authenticated, setAuthenticated, setUser}) => {
    return (
        <Container>
            <Wrapper>
                <SideInput authenticated={authenticated} setAuthenticated={setAuthenticated} setUser={setUser}/>
                <Photo />
            </Wrapper>
        </Container>
    )
}

export default SignupPage;




const Wrapper = styled.div`
background-image: url(${SignupBackground});
width: 100vw;
height: 100vh;
margin-left: 50px;
background-position: center;
background-size: cover;
background-repeat: none;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
background-color: #FFFF; 
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`