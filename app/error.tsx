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
    <div className=' block content-center'>
        <h1>Error Happened</h1>
        <Image src='/images/error.svg' alt='error' width={200} height={200} />
        <button className='btn btn-warning' onClick={()=>reset()}>retry</button>
    </div>
  )
}

export default ErrorPage