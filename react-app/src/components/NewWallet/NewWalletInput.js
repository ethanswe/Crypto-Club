import React, { useState } from 'react'
import Particles from 'react-particles-js';
import { useHistory, Redirect } from "react-router-dom";
import styled from 'styled-components';
import PlusIcon from '../../imgs/plus.png';
import Bitcoin from '../../imgs/bitcoin.png'
import Ethereum from '../../imgs/ethereum.png'
import Litecoin from '../../imgs/litecoin.png'
import SVG from '../../imgs/bitcoin-coin.svg'
import newWallet from '../../services/wallet';

const Container = styled.div`
width: 1200px;
height: 500px;
margin: 0 auto;
border-radius: 20px;
background-color: #191c28;
display: flex; 
align-items: center;
justify-content: center;
margin-top: 150px;
`

const NewWalletInput = ({user}) => {
  const [walletName, setWalletName] = useState("");
  const [balance, setBalance] = useState('');
  const history = useHistory();
//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const user = await signUp(firstName, lastName, email, password);
//       if (!user.errors) {
//         setAuthenticated(true);
//       }
//     }
//   };
const onNewWallet = async (e) => {
	e.preventDefault();
	// eslint-disable-next-line no-restricted-globals
		const wallet = await newWallet({name: walletName, balance, user_id: user.id});
		if (!wallet.errors) {
			history.push('/wallet')
		}
  }
  const updateWalletName = (e) => {
	setWalletName(e.target.value);
  };
    
    const updateBalance = (e) => {
	setBalance(e.target.value);
  }


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
        <Container>
            <Header>
                 Please Create Your New Wallet:
            </Header>
             <Form onSubmit={onNewWallet}>
      <div>
        <label>Wallet Name</label>
        <Input
          type="text"
          name="name"
          onChange={updateWalletName}
          value={walletName}
        ></Input>
      </div>
      <div>
        <label>Balance</label>
        <Input
          type="text"
          name="lastName"
          onChange={updateBalance}
          value={balance}
        ></Input>
      </div>
      <button type="submit">Create New Wallet</button>
    </Form>
    </Container>
    </>
    )
}

export default NewWalletInput


const Header = styled.h2`
margin: 0 auto;
color: white;
margin: 5px;
display: flex;
justify-content: center;
margin-left: 30px;
`


const Input = styled.input`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
width: 380px;
height: 34px;
font-size: 16px;
:focus{
  border-color: black;
}
`


const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: white;
margin: 0 auto;
`