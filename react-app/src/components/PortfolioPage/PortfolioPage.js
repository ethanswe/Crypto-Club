import React, { useEffect, useState } from 'react'
import { getWallet } from '../../services/wallet'
import { useParams } from 'react-router-dom';
import { PortfolioNavigation } from '../PortfolioNavigation/PortfolioNavigation';
import  PortfolioGraph  from './PortfolioGraph';
import WatchList from '../WatchList/WatchList';


const PortfolioPage = ({ authenticated, setAuthenticated, user, wallet, setWallet }) => {
    const { wallet_id } = useParams();
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

// TODO
    // fetch all transactions for the wallet we are on
    // display solely the balance in cash
    // Display the total value of the account -> coins held * market value + cash balance 
    // Consider adding a starting balance column when we create a wallet to show the increase or decrease in account value from the start 
    // create pie chart showing which assets we hold 
    // Display list items 
        // Will have the 24H change color from CoinItem page
        // Will have symbol, current bid 