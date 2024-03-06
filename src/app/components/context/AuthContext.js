"use client"
import { createContext, useContext, useState } from "react";
import { auth, provider } from "@/firebase/config";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    });

    const registerUser = async (values) => {
        const { createUserWithEmailAndPassword } = await import('firebase/auth');

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
        const { signInWithEmailAndPassword } = await import('firebase/auth');
        const userCredentials = await
            signInWithEmailAndPassword(auth, values.email, values.password);

        const user = userCredentials.user;

        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        });
    }

    const loginUserWithGoogle = async () => {
        const { signInWithPopup } = await import('firebase/auth');
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;

        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        });

    }

    const logoutUser = async () => {
        const { signOut } = await import('firebase/auth');
        await signOut(auth);
        setUser({
            logged: false,
            email: null,
            uid: null
        });
    }

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, loginUserWithGoogle, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}