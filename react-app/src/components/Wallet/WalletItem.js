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
  console.log(history)
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
          <button onClick={(() => setUpdating(true))}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
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