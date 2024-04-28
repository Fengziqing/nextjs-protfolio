import React from 'react';
import Image from 'next/image';

const HorizontalRectangle = ({ imgsrc, imgalt }: { imgsrc: string, imgalt: string }) => {
    return (
        <div className="round-badge overflow-hidden w-96 h-48 shadow-lg">
            <Image src={imgsrc} alt={imgalt} width={384} height={200} className=' object-cover'/>
        </div>
    )
}

export default HorizontalRectangle