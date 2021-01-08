import React, { useEffect, useState } from 'react'
import { getCoins } from '../../services/coin';

const CoinPage = () => {
    const [btc, setBtc] = useState(null)
    const [eth, setEth] = useState(null)
    const [bch, setBch] = useState(null)
    const [link, setLink] = useState(null)
    const [ltc, setLtc] = useState(null)
    const [xmr, setXmr] = useState(null)
    const [grt, setGrt] = useState(null)
    const [waves, setWaves] = useState(null)

    const fetchCoins = async (str) => {
        const data = await getCoins(str);
        console.log(data);
    }
    useEffect(() => {
        fetchCoins('btc');
        fetchCoins('eth');
        fetchCoins('bch');
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default CoinPage
