import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import newWallet from '../../services/wallet';
import Background from '../Background/Background';

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
        <Background />
        <Container>
            <Header>
                 Please Create Your New Wallet:
            </Header>
             <Form onSubmit={onNewWallet}>
      <div>
        <label>Wallet Name:</label>
        <Input
          type="text"
          name="name"
          onChange={updateWalletName}
          value={walletName}
        ></Input>
      </div>
      <div>
        <label>Balance:</label>
        <Input
          type="text"
          name="lastName"
          onChange={updateBalance}
          value={balance}
        ></Input>
      </div>
      <Button type="submit">Create New Wallet</Button>
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
  border-color: red;
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

const Button = styled.button`
  border-color: black;
  margin: 2px;
  margin-right: 2px;
  background-color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  text-decoration: none;
  background: white;
  color: black;
  height: 28px;
  min-width: 80px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: black;
    z-index: -1;
    transition: width 150ms ease-in-out;
  }
  
  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`