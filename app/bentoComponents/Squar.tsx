import React from 'react';
import Image from 'next/image';
import './scrollAnimation.scss';

const Squar = ({ imgsrc, imgalt, name }: { imgsrc: string, imgalt: string, name?: string }) => {
  if (imgalt === '') {
    return (
      <div className=" scrollAnimation sm:w-44 w-40 sm:h-44 h-40 overflow-hidden rounded-badge shadow-xl">
        <Image src={imgsrc} alt={imgalt} width={200} height={200} className='object-cover h-auto' />
      </div>
    )

  } else {
    return (
      <div className="sm:w-44 w-40 sm:h-44 h-40 block relative overflow-hidden rounded-badge shadow-xl text-center">
        <div className=" left-1 top-1 right-1 bottom-10 absolute rounded-badge opacity-50 bg-orange-100"></div>
        <Image src={imgsrc} alt={imgalt} width={180} height={180} className=' relative object-cover h-auto mt-1' />
        <p className='font-bold -bottom-2 text-yellow-950 relative drop-shadow-[2px_1px_0_#d3dfde]'>{name}</p>
      </div>
    )
  }
}

export default Squar