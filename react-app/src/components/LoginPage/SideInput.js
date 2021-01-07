import React from 'react'
import styled from 'styled-components';
import LoginForm from '../auth/LoginForm';
import { login } from "../../services/auth";

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

const SideInput = ({ authenticated, setAuthenticated, setUser, user }) => {
    return (
        <Container>
            <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} user={user} setUser={setUser} />
        </Container>
    )
}

export default SideInput;
