import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token')|| '');
    const [color, setColor] = useState(localStorage.getItem('color')|| '');

    const login = (token, color) => {
        localStorage.setItem('token', token);
        localStorage.setItem('color', color);
        setToken(token);
        setColor(color);
    };

    const logout = () => {
        localStorage.clear();
        setToken('');
        setColor('');
    };

    return(
        <AuthContext.Provider value={{token,color,login,logout}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = ()=> useContext(AuthContext);