"use client"
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    const registerUser = async (values) => {
        // In the future we will use an Auth service to register the user
        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        })
    }

    const loginUser = async (values) => {
        // In the future we will use an Auth service to login the user
        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        });
    }

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}