import React from 'react';
import Image from 'next/image';
import './scrollAnimation.scss';

const VerticalRectangle = ({ imgsrc, imgalt }: { imgsrc: string, imgalt: string }) => {
    return (
        <div className=" scrollAnimation rounded-badge sm:h-96 h-[350px] sm:w-44 w-40 overflow-hidden shadow-xl">
            <Image src={imgsrc} alt={imgalt} height={400} width={200} className='object-cover w-full'/>
        </div>
    )
}

export default VerticalRectangle