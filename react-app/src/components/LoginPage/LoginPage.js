import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import LoginBackground from '../../public/homePage.jpg';
import styled from 'styled-components'
import SideInput from '../LoginPage/SideInput';
import Photo from '../LoginPage/Photo';

const Wrapper = styled.div`
background-image: url(${LoginBackground});
width: 100%;
height: 100%;
background-position: center;
background-size: cover;
background-repeat: none;
display: flex;
`

const Container = styled.div`
background-color: #FFFF; 
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`

const LoginPage = () => {




    return (
        <Container>
            <Wrapper>
                <Photo />
                <SideInput />
            </Wrapper>
        </Container>
    )
}

export default LoginPage;