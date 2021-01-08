import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const SignupButton = () => {
    return (
        <NavLink to="/sign-up" exact={true} activeClassName="active">
            <Button >
            Sign Up
            </Button >
        </NavLink>
    )
}

export default SignupButton


const Button = styled.button`
  border-color: black;
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