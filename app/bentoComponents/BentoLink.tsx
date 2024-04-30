'use client';
import React from 'react';
import Image from 'next/image';

const BentoLink = ({imgsrc,imgalt,name,clickLink}:{imgsrc:string,imgalt:string,name:string,clickLink:string}) => {
    function handleClick(link:string) {
        window.open(link, '_blank');
    }
    return (
        <button className=" w-96 h-16 btn rounded-3xl justify-normal bg-linkPink shadow-[2px_3px_0_0_#cb98a1] border-none
                             hover:bg-linkHover hover:shadow-sm" 
        onClick={() => { handleClick(clickLink) }}>
            <Image src={imgsrc} alt={imgalt} width={50} height={50}/>
            <p className="ml-5 text-lg font-bold">{name}</p>
        </button>
    )
}

export default BentoLink