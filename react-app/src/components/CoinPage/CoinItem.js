import React from 'react'

const CoinItem = ({ coin }) => {
    const {bid, ask} = coin;
    return <div>
        {bid} | {ask}
    </div>
};


export default CoinItem;
