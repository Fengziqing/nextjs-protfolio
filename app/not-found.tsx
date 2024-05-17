import React from 'react';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className='py-12 px-2'>
        <h1 className=' text-center'>The request page does not exist</h1>
        <Image className='mx-auto my-20' src='/images/404-page.svg' alt='error' width={250} height={250} />
    </div>
  )
}

export default NotFoundPage