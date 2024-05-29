'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

interface Props {
    imgsrc: string;
    imgalt: string;
    title: string;
    bgcolor: string;
    description: string;
    demoLinkString:String
}

const DemoBlock = ({ imgsrc, imgalt, title, bgcolor, description, demoLinkString}: Props) => {
    const router = useRouter();

    function handleClick() {
        router.push(`/demo/${demoLinkString}`);
    }

    return (
        <button className={`btn sm:w-96 w-[350px] sm:h-44 h-36 rounded-3xl ${bgcolor === '' ? 'bg-[#F0EAE0] opacity-80' : bgcolor} overflow-hidden p-0 border-none text-navBrown
                             hover:shadow-2xl dark:hover:text-white`}
            onClick={handleClick}>
            <div className={`${imgsrc === '' ? 'w-1/5' : 'w-1/2'}
                                h-5/6 rounded-3xl border-2 border-solid border-gray-400 overflow-hidden`} >
                <Image src={`/images/${imgsrc}`} alt={imgalt} width={200} height={200} 
                        className=' h-full object-cover'
                        onError={({currentTarget}) => currentTarget.style.display = 'none'}/>
            </div>
            <div className={`${imgsrc === '' ? 'w-3/5' : 'w-2/5'} pl-2`}>
                <p className=' sm:text-lg text-base font-bold text-left mb-1 '>{title === '' ? 'developing block' : title}</p>
                <div className=' sm:text-sm text-xs text-left'>{description === '' ? 'place-holder for testing, nothing here, if you have any ideas, please contact me!' : description}</div>
            </div>
        </button>
    )
}

export default DemoBlock