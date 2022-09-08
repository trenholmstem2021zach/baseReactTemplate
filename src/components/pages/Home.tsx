import { userContext } from "../../auth/userContext";

export function Home() {
    return <userContext.Consumer>
        {value => <h1>{value.email}</h1>}
    </userContext.Consumer>
}