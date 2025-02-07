import { createContext, useState } from "react";

const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [user, setAuth] = useState({});
    const values = {
        user,
        setAuth,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;