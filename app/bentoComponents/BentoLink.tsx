'use client';
import React from 'react';
import Image from 'next/image';

const BentoLink = ({imgsrc,imgalt,name,clickLink}:{imgsrc:string,imgalt:string,name:string,clickLink:string}) => {
    function handleClick(link:string) {
        window.open(link, '_blank');
    }
    return (
        <button className=" sm:w-96 w-[350px] h-16 btn rounded-3xl text-navBrown justify-normal bg-linkPink shadow-[2px_3px_0_0_#cb98a1] border-none
                             hover:bg-linkHover hover:shadow-sm" 
        onClick={() => { handleClick(clickLink) }}>
            <Image src={imgsrc} alt={imgalt} width={50} height={50}/>
            <p className="ml-5 sm:text-lg text-base font-bold">{name}</p>
        </button>
    )
}

export default BentoLink