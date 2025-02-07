import { useContext } from "react";
import UserContext from "../contexts/contextProvider.jsx";

const useAuth = () => {
    return useContext(UserContext);
}
export default useAuth;