"use client";

import { useState } from "react";
import CustomButtom from "@/app/components/ui/buttons/CustomButton";
import { useAuthContext } from "@/app/components/context/AuthContext";

export default function LoginForm({ translation }) {
    const { registerUser, loginUser } = useAuthContext();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAuth = async (authFunction, userCredentials) => {
        try {
            const response = await authFunction(userCredentials);
            setError(null);
            return response;
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    }

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-gray-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2>{translation.auth.enter_credentials}</h2>
                <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    placeholder={translation.auth.email_placeholder}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <input
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    placeholder={translation.auth.password_placeholder}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                {error && <p className="text-red-500 m-2">{error}</p>}
                <CustomButtom onClick={async () => await handleAuth(loginUser, values)} >{translation.auth.login}</CustomButtom>
                <CustomButtom onClick={async () => await handleAuth(registerUser, values)} className="mx-4" >{translation.auth.register}</CustomButtom>
            </form>
        </div>
    );

}