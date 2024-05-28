import React from 'react';
import Image from 'next/image';
import './scrollAnimation.scss';

const HorizontalRectangle = ({ imgsrc, imgalt }: { imgsrc: string, imgalt: string }) => {
    return (
        <div className=" scrollAnimation sm:w-96 w-[350px] sm:h-44 h-40 rounded-badge overflow-hidden shadow-lg">
            <Image src={imgsrc} alt={imgalt} width={384} height={200} className=' object-cover w-full'/>
        </div>
    )
}

export default HorizontalRectangle