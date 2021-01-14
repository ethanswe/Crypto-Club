import React from 'react'
import styled from 'styled-components';

import Video from './Video';

const MainDiv = () => {
    return (
        <>
            <Video />
            <BottomDiv />
        </>
    )
}

export default MainDiv;









const BottomDiv = styled.div`
background-color: black;
width: 100vw;
height: 250px;
display: flex;
margin-top: 160px;
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