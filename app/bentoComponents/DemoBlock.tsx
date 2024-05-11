'use client'
import React from 'react'
import Image from 'next/image';

interface Props {
    imgsrc: string;
    imgalt: string;
    title: string;
    bgcolor: string;
    description: string
}

const DemoBlock = ({ imgsrc, imgalt, title, bgcolor, description }: Props) => {

    function handleClick() {

    }

    return (
        <button className={`btn w-96 h-44 rounded-3xl ${bgcolor === '' ? 'bg-[#F0EAE0]' : bgcolor} overflow-hidden p-0
                             hover:shadow-2xl`}
            onClick={handleClick}>
            <Image src={imgsrc === '' ? imgsrc : '/images/todolist.png'} alt={imgalt} width={200} height={200} 
                    className=' w-1/2 h-5/6 object-cover rounded-3xl border-solid border-gray-500' />
            <div className='w-2/5'>
                <p className=' text-lg font-bold text-left mb-3'>{title === '' ? 'developing block' : title}</p>
                <div className=' text-sm font-normal text-left'>{description === '' ? 'place holder for testing, nothing here, if you have any ideas, please contact me!' : description}</div>
            </div>
        </button>
    )
}

export default DemoBlock