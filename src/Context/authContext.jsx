import { createContext, useContext, useState,useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

// Function to retrieve a cookie value by name
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

export const AuthContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState(getCookie('token') || null);

    useEffect(() => {
        // Check if the token is still valid in the cookie whenever the component mounts
        const token = getCookie('token');
        if (token) {
            setAuthUser(token);
        } else {
            setAuthUser(null); // Reset if no token is found
        }
    }, []);

    return(
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    );
};