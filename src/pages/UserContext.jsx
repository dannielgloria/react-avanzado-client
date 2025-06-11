import { createContext, useState, useContext } from "react";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = () => setUser({ name: "Daniel"})
    const logout = () => setUser(null)

    return(
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}