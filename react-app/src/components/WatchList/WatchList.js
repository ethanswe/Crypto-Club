import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getList } from '../../services/list';

const WatchList = ({ user }) => {
    const [watchList, setWatchList] = useState({})
    console.log(watchList)

    const fetchList = async () => {
       const data = await getList({ user_id: user.id });
        setWatchList(data);
    };
    console.log(watchList);
    useEffect(() => {
        fetchList({ user_id: user.id });
    }, [])

    // for (let coins in watchList) {
    //     console.log(coins)
    // }

    return (
        <WatchListDiv>
            <Header>Crypto Watch List:</Header>
        </WatchListDiv>
    )
}

export default WatchList


const WatchListDiv = styled.div`
border: 1px solid black;
background-color: white;
width: 600px;
height: 400px;
margin: 0 auto;
`

const Header = styled.h1`
font-size: 20px;
color: black;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
border-bottom: 1px solid black;
/* background-color: black; */
max-width: 400px;
font-family: 'Cinzel', serif;
`