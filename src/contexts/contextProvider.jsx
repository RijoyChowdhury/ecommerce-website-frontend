import { createContext, useState } from "react";

const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [user, setAuth] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const values = {
        user,
        setAuth,
        isUserLoggedIn,
        setIsUserLoggedIn,
        openModal, setOpenModal,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;