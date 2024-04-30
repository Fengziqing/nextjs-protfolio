import React from 'react';
import Image from 'next/image';

const Picture = ({imgsrc,imgalt}:{imgsrc:string,imgalt:string}) => {
    return (
        <div className="rounded-badge overflow-hidden w-96 h-96 shadow-2xl">
            <Image src={imgsrc} alt={imgalt} width={400} height={400} className='object-cover h-full'/>
        </div>
    )
}

export default Picture