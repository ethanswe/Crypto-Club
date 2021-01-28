import React from "react"; 
import ReactPlayer from "react-player";
import HomepageVideo from '../../video/mainHomepageVid.mp4';
import styled from 'styled-components';
import HomeText from './HomeText';
const Video = () => {

    return (
        <>
        <VideoDiv>
            <ReactPlayer
            url= {HomepageVideo}
            width='100%'
            height='100%'
                playing={true}
                loop={true}

            />
        </VideoDiv>
        <HomeText />
        </>
    )
}

export default Video;


const VideoDiv = styled.div`
position: absolute;
background-image: cover;
z-index: -10;
margin-bottom: 20px;
`