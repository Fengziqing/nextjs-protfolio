import React from 'react';
import Image from 'next/image';

const HorizontalRectangle = ({ imgsrc, imgalt }: { imgsrc: string, imgalt: string }) => {
    return (
        <div className="w-96 h-44 rounded-badge overflow-hidden shadow-lg">
            <Image src={imgsrc} alt={imgalt} width={384} height={200} className=' object-cover w-full'/>
        </div>
    )
}

export default HorizontalRectangle