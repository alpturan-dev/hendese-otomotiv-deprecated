import { useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [email, setEmail] = useState(user ? user.email : null);
    const [password, setPassword] = useState(user ? user.password : null);
    const userdata = {
        email,
        setEmail,
        password,
        setPassword
    }
    return <UserContext.Provider value={userdata}>{children}</UserContext.Provider>
}

export default UserContext;