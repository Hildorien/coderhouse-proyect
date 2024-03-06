"use client";
import React from 'react';
import Image from 'next/image';
import googleLogo from '@/assets/google_logo.png';
import { useAuthContext } from "@/app/components/context/AuthContext";


const GoogleAuthButton = () => {

    const { loginUserWithGoogle } = useAuthContext();

    return (
        <button
            className="flex items-center justify-center px-4 py-2 space-x-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
            onClick={loginUserWithGoogle}
        >
            <Image
                src={googleLogo}
                alt="Google Logo" className="w-6 h-6"
                width={24} height={24} />
            <span className="text-gray-700">Sign in with Google</span>
        </button>
    );
};

export default GoogleAuthButton;
