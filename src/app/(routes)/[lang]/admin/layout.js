"use client";

import { useAuthContext } from "@/app/components/context/AuthContext";

/* Conditional Routing with authentication example: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes */

// Slots (@login) is passed as props to the shared parent layout which is AdminLayout
export default function AdminLayout({ children, login }) {
    const { user } = useAuthContext();

    return (
        <>
            {/* Conditionally render a parallel route like the @login page if user is not logged in */}
            {user.logged ? children : login}
        </>
    );
}
