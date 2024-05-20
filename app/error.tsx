'use client';
import React from 'react';
import Image from 'next/image';

interface Props{
    error:Error;
    reset: ()=>void;
}
const ErrorPage = ({error,reset}:Props) => {
  console.log(error);
    return (
    <div className='inline-block'>
        <h1 className=' text-center w-full'>Error Happened</h1>
        <Image className='mx-auto my-10' src='/images/error.svg' alt='error' width={200} height={200} />
        <button className='btn btn-warning btn-wide' onClick={()=>reset()}>retry</button>
    </div>
  )
}

export default ErrorPage