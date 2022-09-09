import { CurrentUser } from "../../auth/userUtilities";

export function UserInfo() {
  const user = CurrentUser();
  alert(JSON.stringify(user));
  if (user !== undefined) {
    return <>{user.email}</>;
  } else {
    return <></>;
  }
}
