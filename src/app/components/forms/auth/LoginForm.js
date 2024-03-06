"use client";

import { useState } from "react";
import CustomButtom from "@/app/components/ui/buttons/CustomButton";
import { useAuthContext } from "@/app/components/context/AuthContext";
import GoBack from '@/app/components/ui/buttons/GoBack';
import GoogleAuthButton from "@/app/components/ui/buttons/GoogleAuthButton";

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
        <>
            <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-gray-400 bg-opacity-25">
                <div className="flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="bg-white py-10 px-10 rounded-xl max-w-md w-full">
                        <GoBack text={translation.goBack} className="text-sm text-blue-500 inderline mb-6" />
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
                    <div className="max-w-md w-full mt-4">
                        <GoogleAuthButton />
                    </div>
                </div>
            </div>

        </>

    );

}