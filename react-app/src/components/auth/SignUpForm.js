import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import styled from 'styled-components';

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
margin-left: 200px;
`



const SignUpForm = ({authenticated, setAuthenticated, setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, email, password);
      if (!user.errors) {
        setUser(user);
        setAuthenticated(true);
      }
    }
  }; 

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/wallet" />;
  }

  return (
    <>
    <WelcomeDiv>Welcome to Crypto Club</WelcomeDiv>
    <Form onSubmit={onSignUp}>
      <div>
        <label>First Name</label>
        <Input
          type="text"
          name="firstName"
          onChange={updateFirstName}
          value={firstName}
        ></Input>
      </div>
      <div>
        <label>Last Name</label>
        <Input
          type="text"
          name="lastName"
          onChange={updateLastName}
          value={lastName}
        ></Input>
      </div>
      <div>
        <label>Email</label>
        <Input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></Input>
      </div>
      <div>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></Input>
      </div>
      <div>
        <label>Repeat Password</label>
        <Input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></Input>
      </div>
      <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};

export default SignUpForm;


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

const WelcomeDiv = styled.div`
position: absolute;
margin-top: -500px;
font-size: 25px;
margin-left: 250px;
width: 300px;
`

