import { createContext, useState } from "react";

const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [user, setAuth] = useState({});
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const values = {
        user,
        setAuth,
        isUserLoggedIn,
        setIsUserLoggedIn,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;