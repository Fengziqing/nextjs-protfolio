import React from 'react';
import Image from 'next/image';

const VerticalRectangle = ({ imgsrc, imgalt }: { imgsrc: string, imgalt: string }) => {
    return (
        <div className="round-badge overflow-hidden h-96 w-48 shadow-lg">
            <Image src={imgsrc} alt={imgalt} height={400} width={200} className='object-cover w-full'/>
        </div>
    )
}

export default VerticalRectangle