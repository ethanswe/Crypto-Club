import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  
  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
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
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <Route path='/' exact={true}>
        <HomePage />
      </Route>
      <ProtectedRoute path="/wallet" exact={true} authenticated={authenticated}>
        <WalletPage/>
      </ProtectedRoute>
      <ProtectedRoute path="/new-wallet" exact={true} authenticated={authenticated}>
        <NewWallet/>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
