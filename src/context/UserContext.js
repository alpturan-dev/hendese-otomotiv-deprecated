import { useState, createContext } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const productsData = JSON.parse(localStorage.getItem('products'));
    const [email, setEmail] = useState(user ? user.email : null);
    const [password, setPassword] = useState(user ? user.password : null);
    const [products, setProducts] = useState(productsData ? productsData : []);
    const userdata = {
        email,
        setEmail,
        password,
        setPassword,
        products,
        setProducts
    }
    return <UserContext.Provider value={userdata}>{children}</UserContext.Provider>
}

export default UserContext;