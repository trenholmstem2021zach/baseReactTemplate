import { createContext } from "react";

export type UserType = {
  email: string | undefined;
  role: string | undefined;
};

export const userContext = createContext<UserType>({
  email: undefined,
  role: undefined,
});
