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
        <button className={`btn w-96 h-44 rounded-3xl ${bgcolor === '' ? 'bg-[#F0EAE0]' : bgcolor} overflow-hidden p-0 border-none
                             hover:shadow-2xl`}
            onClick={handleClick}>
            <div className={`${imgsrc === '' ? 'w-1/5' : 'w-1/2'}
                                h-5/6 rounded-3xl border-2 border-solid border-gray-400 overflow-hidden`} >
                <Image src={imgsrc === '' ? imgsrc : '/images/todolist.png'} alt={imgalt} width={200} height={200} 
                        className=' h-full object-cover'
                        onError={({currentTarget}) => currentTarget.style.display = 'none'}/>
            </div>
            <div className={`${imgsrc === '' ? 'w-3/5' : 'w-2/5'} pl-2`}>
                <p className=' text-lg font-bold text-left mb-1'>{title === '' ? 'developing block' : title}</p>
                <div className=' text-sm font-normal text-left'>{description === '' ? 'place-holder for testing, nothing here, if you have any ideas, please contact me!' : description}</div>
            </div>
        </button>
    )
}

export default DemoBlock