import React, { useState } from 'react';
import './App.css';
import { Home } from "./components/pages/Home"
import { Header } from "./components/organisms/Header";

import { userContext, UserType } from './auth/userContext';
//import { useAuth0 } from '@auth0/auth0-react';
//import { current } from '@reduxjs/toolkit';
import { AuthButton } from './components/molecules/AuthButton';

function App() {
  //const { user } = useAuth0();
  const [currentUser, setCurrentUser] = useState<UserType>({ email: undefined, role: undefined });
  //const [authenicated, isAuthenticated] = useState<Boolean>(false);


    return (
      <userContext.Provider value={currentUser}>
        <Header />
        <Home />
        <AuthButton/>
      </userContext.Provider>
    )

}

export default App;
