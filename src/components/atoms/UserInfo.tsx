import { useAuth0 } from "@auth0/auth0-react";

export function UserInfo() {
    const { user } = useAuth0();
    if (user !== undefined) {
        return (<>
            {user.email}
        </>)
    }
    else {
        return (<></>)
    }
}