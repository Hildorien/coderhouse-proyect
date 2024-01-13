'use client';

import { useEffect } from 'react';
import CustomButton from '@/app/components/ui/buttons/CustomButton';
import GoBack from '@/app/components/ui/buttons/GoBack';

export default function Error({
    error,
    reset,
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Something went wrong.</h2>
            <CustomButton className='mb-4' onClick={() => reset()}>Try again!</CustomButton>
            <br />
            <GoBack text={"Go back"} className="text-sm text-blue-500 inderline mt-4" />
        </div>
    );
}