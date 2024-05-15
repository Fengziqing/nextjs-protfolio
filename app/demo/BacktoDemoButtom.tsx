'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export const BacktoDemoButtom = () => {
    const router = useRouter();

    function handleBack() {
        router.push('/demo');
    }
    return (
        <button className='btn btn-wide mb-10' onClick={handleBack}> Back to Demo Page</button>
    )
}
