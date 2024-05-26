import React from 'react';
import Image from 'next/image';

const Picture = ({imgsrc,imgalt}:{imgsrc:string,imgalt:string}) => {
    return (
        <div className="rounded-badge overflow-hidden sm:w-96 w-[350px] sm:h-96 h-[350px] shadow-2xl">
            <Image src={imgsrc} alt={imgalt} width={400} height={400} className='object-cover h-full'/>
        </div>
    )
}

export default Picture