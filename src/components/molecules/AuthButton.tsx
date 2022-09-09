import { useAuth0 } from "@auth0/auth0-react";
import { UserInfo } from "../atoms/UserInfo";

export const AuthButton = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (user === undefined || isLoading || !isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  } else {
    return (
      <>
        (<UserInfo />) :{" "}
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Log Out
        </button>
      </>
    );
  }
};
