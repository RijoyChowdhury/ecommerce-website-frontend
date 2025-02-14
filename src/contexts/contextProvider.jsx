import { createContext, useState } from "react";

const UserContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const values = {
        openModal, setOpenModal,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;