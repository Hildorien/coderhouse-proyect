"use client"
import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    const registerUser = async (values) => {
        const userCredentials = await
            createUserWithEmailAndPassword(auth, values.email, values.password);

        const user = userCredentials.user;

        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        })
    }

    const loginUser = async (values) => {
        const userCredentials = await
            signInWithEmailAndPassword(auth, values.email, values.password);

        const user = userCredentials.user;

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