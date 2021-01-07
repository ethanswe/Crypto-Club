import React, { useEffect, useState } from 'react'
import { getWallet } from '../../services/wallet'
import { useParams } from 'react-router-dom';

const PortfolioPage = () => {
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
            {/* {wallet.name} */}
            <h1>Portfolio</h1>
        </div>
    )
}

export default PortfolioPage
