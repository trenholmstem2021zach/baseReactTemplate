import { useAuth0 } from "@auth0/auth0-react";

import React from 'react';
import './App.css';
import { DemoForm } from './FormDemo';
import { sendEmail } from "./emailApi"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (user === undefined || isLoading || !isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  } else {

    return <React.Fragment>{user.email}</React.Fragment>
  }
};

export const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (!isLoading && isAuthenticated && user) {
    console.log(user.email);
    sendEmail(user.email)
    return (
      <React.Fragment>
        <button onClick={() => {
          logout({ returnTo: window.location.origin })
        }}>
          Log Out
        </button>
      </React.Fragment>
    );
  } else {
    console.log("not logged in")
    return (
      <React.Fragment>
        -
      </React.Fragment>
    );
  }

};

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (!isLoading && isAuthenticated && user) {
    //console.log(user)
    return (
      <div className="App">
        <b>{user.email}</b>
        <p>
          Base React Typescript Form Template
        </p>
        <DemoForm />
        <LogoutButton />
      </div>
    );
  } else {
    return (
      <div className="App">
        <p>
          <LoginButton /></p>
      </div>);
  }
}

export default App;
