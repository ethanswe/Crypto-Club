import React, { useEffect, useState } from 'react'
import { getWallet } from '../../services/wallet'
import { useParams } from 'react-router-dom';
import { PortfolioNavigation } from '../PortfolioNavigation/PortfolioNavigation';
import  PortfolioGraph  from './PortfolioGraph';
import WatchList from '../WatchList/WatchList';

const PortfolioPage = ({ authenticated, setAuthenticated, user, wallet, setWallet }) => {
    const { wallet_id } = useParams();
    console.log(wallet);
    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id });
        setWallet(data);
    };

    useEffect(() => {
        fetchWallet();
    }, []);
    
    return (
        <div>
        <PortfolioNavigation user={user} authenticated={authenticated} setAuthenticated={setAuthenticated} wallet={wallet}/>
            {/* {wallet.name} */}
            <PortfolioGraph />
            <WatchList />
        </div>
    )
}

export default PortfolioPage
