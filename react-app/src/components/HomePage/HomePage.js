import React from 'react';
import { Redirect } from "react-router-dom";
import HomeText from './HomeText';
import MainDiv from './MainDiv';
import "./homepage.css";
import styled from 'styled-components';

const HomePage = ({ authenticated }) => {
    if (authenticated) {
    return <Redirect to='/wallet' />
  }
    return (
        <div>
            <HomePageDiv>

            <MainDiv />
            </HomePageDiv>
        </div>
    )
}

export default HomePage


const HomePageDiv = styled.div`
background-color: black;
z-index: -15;
width: 100vw;
height: 100vh;
position: absolute;
`