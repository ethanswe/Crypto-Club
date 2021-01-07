import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import LoginBackground from '../../imgs/homePage.jpg';
import styled from 'styled-components'

const HomePageContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Wrapper = styled.div`
background-image: url(${LoginBackground});
width: 100%;
height: 100%;
background-position: center;
`

const ImgContainer = styled.div`
width: 60vw;
height: 50vw;
grid-area: b;

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

}
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.h1`
font-size: 25px;
margin-bottom: 30px;
`

const Button = styled.button`
  border-color: black;
  background-color: white;
  border-radius: 25px;
  color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  
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

const LoginForm = ({ authenticated, setAuthenticated, user, setUser }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(user)
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      setUser(user)
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/wallet" />;
  }

  return (
    <>

      <Form onSubmit={onLogin}>
        <Header>Welcome to Crypto Club</Header>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <Button type="submit">Log In</Button>
      </div>
      </Form>
      </>
  );
};

export default LoginForm;
