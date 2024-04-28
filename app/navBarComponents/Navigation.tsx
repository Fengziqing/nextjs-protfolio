'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;

    return (
        <div className='m-0 p-0 flex overflow-clip justify-center font-bold opacity-80 text-justify
                        
                        xl:bg-navBrown xl:shadow-[3px_5px_0_0_#d6ae7e] xl:rounded-3xl'>
            {[['Home', "/home"],
            ['CV', "/cv"],
            ['Demo', "/demo"],
            ['Contact Me', "/contactMe"]
            ].map(([PageName, hrefLink]) =>
                <Link
                    key={PageName}
                    href={hrefLink}
                    className={`${isActive(hrefLink) ? 'text-[#FFE071] bg-navBrown shadow-lg rounded-md xl:bg-none xl:shadow-none xl:rounded-none' : ''} 
                                mx-2 my-4 px-1 text-xs cursor-pointer transition-all duration-300
                                sm:mx-3 sm:my-4 sm:px-2 sm:py-0 sm:text-sm
                                md:mx-4 md:my-4 md:px-3 md:text-base
                                xl:mx-2 xl:px-2
                              hover:text-[#f0f5e2] hover:opacity-70 hover:ease-in-out`}>
                    {PageName}
                </Link>)}
        </div>
    )
}

export default Navigation