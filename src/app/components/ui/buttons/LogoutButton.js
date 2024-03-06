"use client";
import React from 'react';
import { useAuthContext } from "@/app/components/context/AuthContext";
const LogoutButton = () => {
    const { logoutUser } = useAuthContext();

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={logoutUser}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
