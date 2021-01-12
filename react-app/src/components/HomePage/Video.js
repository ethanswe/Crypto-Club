import React, { useState } from "react"; 
import ReactPlayer from "react-player";
import HomepageVideo from '../../video/homepageVid.mp4';
import styled from 'styled-components';

const Video = () => {

    return (
        <VideoDiv className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= {HomepageVideo}
            width='100%'
            height='100%'
                playing={true}
                loop={true}

            />
        </VideoDiv>
    )
}

export default Video;


const VideoDiv = styled.div`
max-width: 800px;
max-height: 450px;
`