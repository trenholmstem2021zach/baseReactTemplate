import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (user && isAuthenticated && !isLoading) return user;
  return undefined;
};
