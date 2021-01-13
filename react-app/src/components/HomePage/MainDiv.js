import React from 'react'
import styled from 'styled-components';

import Video from './Video';

const MainDiv = () => {
    return (
        <>
            <Video />
        </>
    )
}

export default MainDiv;


const LeftSide = styled.div`
width: 40%;
`

const Wrapper = styled.div`
height: 100vh;
width: 100vw;

`

const VideoWrapper = styled.div`
/* margin-right: 250px;
display: flex 1 0 auto;
flex-direction:column; */
width: 60%;
`

const InnerWrapper = styled.div`
max-width: 1000px;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`

// Styling
const MainContainer = styled.div`
background-color: #3d065f;
/* background-color: #141414; */
width: 100vw;
height: 100wh;
display: flex;
justify-content: center;
align-items: center;
left: 0;
height: 650px;
`



const TextDiv = styled.div`
/* background-color: black; */
width: 600px;
color: white;
height: 450px;
padding: 100px;
margin-left: 150px;

`

const BottomDiv = styled.div`
background-color: blue;
width: 100vw;
height: 500px;
`





    // return (
    //     <>
    //         <Video>
                
    //                     </Video>
    //         <MainContainer>
    //             <Wrapper>
    //                 <InnerWrapper>
    //                     <LeftSide>
    //                         <HomeText />
    //                     </LeftSide>
    //                     <VideoWrapper>
    //                     </VideoWrapper>

    //             </InnerWrapper>
    //         </Wrapper>
    //     </MainContainer>
    //     <BottomDiv />    
    //     </>
    // )