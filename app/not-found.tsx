import React from 'react';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className='py-12 px-2'>
        <h1>The request page does not exist</h1>
        <Image src='/images/404-page.svg' alt='error' width={250} height={250} />
    </div>
  )
}

export default NotFoundPage