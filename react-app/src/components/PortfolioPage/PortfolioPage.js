import React, { useEffect, useState } from 'react'
import { getWallet } from '../../services/wallet'
import { useParams } from 'react-router-dom';
import { PortfolioNavigation } from '../PortfolioNavigation/PortfolioNavigation';
import  PortfolioGraph  from './PortfolioGraph';
import WatchList from '../WatchList/WatchList';

const PortfolioPage = ({ authenticated, setAuthenticated }) => {
    const { wallet_id } = useParams();
    const [ wallet, setWallet ] = useState(null)
    
    const fetchWallet = async () => {
        const data = await getWallet({ wallet_id });
        setWallet(data);
    };

    useEffect(() => {
        fetchWallet();
    }, []);
    console.log(wallet)
    
    return (
        <div>
        <PortfolioNavigation authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            {/* {wallet.name} */}
            <PortfolioGraph />
            <WatchList />
        </div>
    )
}

export default PortfolioPage
