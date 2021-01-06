import React from 'react'
import SignupBackground from '../../imgs/signupPage.jpg';
import styled from 'styled-components';
import Photo from './Photo';
import SideInput from './SideInput';
const SignupPage = ({ authenticated, setAuthenticated}) => {
    return (
        <Container>
            <Wrapper>
                <SideInput authenticated={authenticated} setAuthenticated={setAuthenticated} />
                <Photo />
            </Wrapper>
        </Container>
    )
}

export default SignupPage;




const Wrapper = styled.div`
background-image: url(${SignupBackground});
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background-repeat: none;
display: flex;
margin-right: 200px;
`

const Container = styled.div`
background-color: #FFFF; 
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`