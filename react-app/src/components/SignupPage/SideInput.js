import React from 'react'
import styled from 'styled-components';
import SignUpForm from '../auth/SignUpForm';

const Container = styled.div`
min-width: 960px;
padding: 0 2rem;
justify-content: space-evenly;
background-color: white;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const SideInput = ({ authenticated, setAuthenticated }) => {
    return (
        <Container>
            <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Container>
    )
}

export default SideInput;