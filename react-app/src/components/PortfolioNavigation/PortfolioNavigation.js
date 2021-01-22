import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
export const PortfolioNavigation = ({ authenticated, setAuthenticated }) => {
    const { wallet_id } = useParams();
    console.log(wallet_id)
    return (
        <NavBar>
            <LogoutButton authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <NavLink to="/wallet" exact={true} activeClassName="active">
                <Buttons>
                    Wallets
                </Buttons>
            </NavLink>
            <NavLink to={`/wallet/${wallet_id}/coins`} exact={true} activeClassName="active">
                <Buttons>
                    Coins
                </Buttons>  
            </NavLink>
            <NavLink to='/swap' exact={true} activeClassName="active">
                <Buttons>
                    Swap
                </Buttons>
            </NavLink>
        </NavBar>
    )
}

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
text-decoration: none;
/* margin: 0 auto; */
height: 40px;
top: 0;
background-color: black;
`

const Buttons = styled.button`
  border-color: black;
  margin: 2px;
  margin-right: 2px;
  background-color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  text-decoration: none;
  background: #222;
  height: 28px;
  min-width: 80px;
  border: none;
  border-radius: 10px;
  color: #eee;
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