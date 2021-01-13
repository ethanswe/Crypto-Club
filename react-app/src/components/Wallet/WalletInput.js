import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import PlusIcon from '../../imgs/plus.png';
import { getWallets } from '../../services/wallet';
import  Card  from './DeleteWallet';
import Particles from 'react-particles-js';
import Ethereum from '../../imgs/ethereum.png'
import Litecoin from '../../imgs/litecoin.png'
import SVG from '../../imgs/bitcoin-coin.svg'
const Container = styled.div`
width: 1200px;
height: 700px;
margin: 0 auto;
border-radius: 20px;
background-color: #191c28;
`

const Div = styled.div`
/* background-color: white; */
font-size: 20px;
color: white;
margin-left: 5px;
/* margin-bottom: 25px; */
/* width: 400px; */
opacity:0.65;
display: flex;
align-items: center;
justify-content: space-between;
`

const WalletNameDiv = styled.div`
:hover{
        opacity:1;
        text-decoration: underline;
}
`

const WalletInput = ({ user }) => {
    const history = useHistory();
    const [wallets, setWallets] = useState([]);
    console.log(wallets)
    const onClick = () => {
        // console.log('Im working')
        history.push('/new-wallet')
    };


    const fetchWallets = async () => {
        const data = await getWallets({ user_id: user.id });
        setWallets(data.wallets);
    };

    useEffect(() => {
        fetchWallets();
    }, []);

    const walletItems = wallets.map((wallet) => {
        const handleClick = () => history.push(`/wallet/${wallet.id}`)
        return (
            <>
                            <Particles
                className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": SVG,
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": Ethereum,
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": Litecoin,
	                    "height": 20,
	                    "width": 20
	                }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
                <Div key={wallet.id} >
                    <WalletNameDiv onClick={handleClick}>
                        {wallet.name}
                    </WalletNameDiv>    
                    <Card />
                </Div>
            </>
        )
    });

    return (        
    <>
        <Container>
            <Header>
                Please Choose Your Wallet:
                <Icon onClick={onClick} />
            </Header>
                {walletItems}
        </Container>

            </>
    )
}

export default WalletInput


const Header = styled.h2`
/* margin: 0 auto; */
border-bottom: solid 1px #f0f0f5;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
color: white;
margin: 5px;
`

const Icon = styled.div`
background-image: url(${PlusIcon});
width: 30px;
height: 30px;
background-size: cover;
/* background-color: white; */
:hover{
    opacity: 0.5;
}
`


