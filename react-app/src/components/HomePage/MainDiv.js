import React from 'react'
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import GithubLogoImg from '../../imgs/githubLogo.png';
import Video from './Video';

const MainDiv = () => {
    const onClick = (e) => {
        return <Redirect to='https://github.com/ethanswe/Crypto-Club' />
    }
    return (
        <>
            <Video />
            <BottomDiv>
                <Disclaimer>
                    DISCLAIMER: THIS PROJECT IS FOR DEMONSTRATION PURPOSES ONLY. PLEASE DO NOT TAKE THE DATA INTO CONSIDERATION FOR REAL-LIFE TRADING.
                        <a href='https://github.com/ethanswe/Crypto-Club' target="_blank">
                <GithubLogo onClick={onClick} />
                </a>
                </Disclaimer>
            </BottomDiv>
        </>
    )
}

export default MainDiv;



const Disclaimer = styled.div`
font-size: 20px;
color: white;
margin: 0 auto;
@media(min-width: 1700px){
    margin-top: 50px;
}
display: inline-block;
/* justify-content: center;
align-items: center; */
`


const GithubLogo = styled.div`
background-image: url(${GithubLogoImg});
height: 75px;
width: 75px;
background-size: cover;
margin: 0 auto;
margin-top: 10px;
:hover {
    opacity: 0.5;
}
`

const BottomDiv = styled.div`
background-color: black;
display: inline-flex;
position: absolute;
width: 100vw;
height: 24.5vh;
display: flex;
margin-top: 160px;
justify-content: center;
@media(max-width: 1450px){
    margin-top: 80px;
}
@media(min-width: 1700px){
    margin-top: 160px;
}
`
