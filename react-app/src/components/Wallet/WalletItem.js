import React, { useState }from 'react';
import { useHistory } from "react-router-dom";
import MenuDrop from '../../imgs/menuDrop.png';
import styled from 'styled-components';
import { updateWallet, deleteWallet } from '../../services/wallet';
import Balance from '../PortfolioPage/Balance';


const WalletItem = ({ wallet }) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [newName, setNewName] = useState(wallet.name);

  const handleDropdownClick = (e) => {
    if (showMenu) {
      setUpdating(false); 
    }
    setShowMenu(!showMenu);
  }
  const handleClick = () => history.push(`/wallet/${wallet.id}`);
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleSubmit = async (e) => {
    await updateWallet({ wallet_id: wallet.id, name: newName, balance: wallet.balance })
    setUpdating(false);
  }
  const handleDelete = async (e) => {
    await deleteWallet({ wallet_id: wallet.id })
    window.location.reload()
  }

  const nameDiv = <WalletNameDiv onClick={handleClick}>
          {wallet.name}
  </WalletNameDiv>
  
  const nameForm = <form onSubmit={handleSubmit}>
    <input value={newName} onChange={handleNameChange} type="text" />
    <button>Update</button>
    </form>

  return (
    <Div>
      {updating ? nameForm : nameDiv}
      <DropDown onClick={handleDropdownClick} />
      <ConditionalShow showing={showMenu}>
        <div>
          <Button onClick={(() => setUpdating(true))}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        </ConditionalShow>
    </Div>
  )
};

const ConditionalShow = ({ showing, children }) => {
  return showing ? children : null;
};

export default WalletItem;

const DropDown = styled.div`
background-image: url(${MenuDrop});
width: 50px;
height: 30px;
background-position: cover;
:hover{
    opacity: 0.5;
}
`


const WalletNameDiv = styled.div`
:hover{
        opacity: 1;
		text-decoration: underline;
		color: white;
}
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

const Button = styled.button`
  border-color: black;
  margin: 2px;
  margin-right: 25px;
  background-color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  text-decoration: none;
  /* background: #222; */
  height: 20px;
  min-width: 80px;
  border: none;
  border-radius: 10px;
  color: black;
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
    background: black;
    &:after {
      width: 110%;
    }
  }
`