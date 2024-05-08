'use client'
import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';

const Experience = ({title,titleDesription,descriptionLink,content}:{title:string,titleDesription?:string, descriptionLink?:string, content:string[]}) => {
    return (
        <div className=" flex">
            <div className="flex sticky top-24 h-24">
                <p className=' text-lg text-left font-bold'>{title}</p> <br /><span onClick={()=>{window.open({descriptionLink}, '_blank');}}> {titleDesription} </span>
                <Image className=" m-1" src='/images/spot.svg' alt="spot" width={40} height={40}/>
            </div>
            <ul className="ul-normal">
                {content.map(item => <li className=' mr-' key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Experience