import React from "react";
import { logout } from "../../services/auth";
import styled from 'styled-components'

const LogoutButton = ({authenticated, setAuthenticated}) => {
  // console.log(authenticated);
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };
  return (
    <>
      { authenticated ?
        <Buttons onClick={onLogout}>Logout</Buttons>
      : null }
    </>
  )
};

export default LogoutButton;

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