import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
min-width: 1100px;
align-items: center;
@media (max-width: 600px){
    display: none;
}
`

const Photo = ({ authenticated, setAuthenticated }) => {
    return (
        <Container>
            
        </Container>
    )
}

export default Photo;
