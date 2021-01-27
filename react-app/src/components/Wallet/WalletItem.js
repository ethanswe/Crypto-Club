import React, { useState }from 'react';
import { useHistory } from "react-router-dom";
import MenuDrop from '../../imgs/menuDrop.png';
import styled from 'styled-components';


const WalletItem = ({ wallet }) => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  
  const handleDropdownClick = (e) => setShowMenu(!showMenu);
  const handleClick = () => history.push(`/wallet/${wallet.id}`);
  
  return (
    <>
    <Div>
        <WalletNameDiv onClick={handleClick}>
          {wallet.name}
        </WalletNameDiv>
      <DropDown onClick={handleDropdownClick} />
      <ConditionalShow showing={showMenu}>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        </ConditionalShow>
      </Div>
    </>
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