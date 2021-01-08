import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, useHistory } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/SignupPage/SignupPage";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import LoginPage from './components/LoginPage/LoginPage';
import WalletPage from './components/Wallet/WalletPage';
import HomePage from './components/HomePage/HomePage';
import NewWallet from './components/NewWallet/NewWallet';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import CoinPage from './components/CoinPage/CoinPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();
  
  console.log(authenticated);
  console.log(user);



  useEffect(() => {
    (async() => {
      const authUser = await authenticate();
      if (!authUser.errors) {
        setAuthenticated(true);
        setUser(authUser);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  
  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      <Route path="/login" exact={true} >
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          user={user}
          setUser={setUser}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated}  user={user} setUser={setUser}/>
      </Route>
      <Route path='/' exact={true}>
        <HomePage />
      </Route>
      <ProtectedRoute path="/wallet" exact={true} authenticated={authenticated}>
        <WalletPage user={user} setUser={setUser}/>
      </ProtectedRoute>
      <ProtectedRoute path="/new-wallet" exact={true} authenticated={authenticated}>
        <NewWallet user={user} setUser={setUser}/>
      </ProtectedRoute>
      <ProtectedRoute path="/coins" exact={true} authenticated={authenticated}>
        <CoinPage user={user} setUser={setUser}/>
      </ProtectedRoute>
      <ProtectedRoute  exact={true} authenticated={authenticated} path="/wallet/:wallet_id">
        <PortfolioPage user={user}/>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
