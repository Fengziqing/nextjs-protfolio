'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LinkIcon from './navBarComponents/LinkIcon';
import avatar from '@/public/images/avatar.png';
import biglogo from '@/public/images/biglogo.png';
import smalllogo from '@/public/images/smalllogo.png';
import Navigation from './navBarComponents/Navigation';
import { ThemeButtom } from './navBarComponents/ThemeButtom';

const NavBar = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);


    function controlNavbar() {
        if (window.scrollY < lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }

        setLastScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <div className={`${show && 'opacity-0 xl:opacity-100'} bg-navGreen flex fixed justify-center w-full h-12 z-50 transition-opacity
                        sm:m-2 sm:w-11/12 sm:rounded-3xl sm:h-14
                        xl:rounded-none xl:rounded-tr-3xl xl:block xl:m-0 xl:p-9 xl:w-1/3 xl:h-full`}>
            <Link href='/' className='md:hidden'>
                <Image src={smalllogo} alt='small-H' width={39} height={39} className="mx-4 my-1 sm:my-2" />
            </Link>
            <Link href='/' className='hidden md:block xl:hidden'>
                <Image src={biglogo} alt='haruko' width={150} className='mx-4' />
            </Link>
            <Navigation />
            <Link href='/' className='hidden xl:flex'>
                <Image className="mt-12 ml-5" src={avatar} alt="avatar" width={173} height={173} />
            </Link>
            <div className='hidden xl:flex my-5'>
                <Link href="/" className="text-navYellow font-bold text-4xl ms-3 drop-shadow-[2px_3px_0_#665048]">Haruko Feng</Link>
                <span className='my-4 ml-3 text-sm font-base text-neutral-500'>ZiQing Feng(27)</span>
            </div>
            <ul className='hidden xl:block p-0 italic text-lg text-navFontGray justify-center ml-5 space-y-4 list-disc font-light'>
                <li>Software Engineer, Client Engineer</li>
                <li>Computer Science Master</li>
                <li>Live in China</li>
                <li>Language: Japanese, English, Chinese</li>
            </ul>
            <div className="hidden xl:flex justify-center mt-16">
                <LinkIcon srcPic="images/email.svg" link="https://mail.google.com/mail/u/0/?view=cm&amp&fs=1&amp&tf=1&amp&source=mailto&amp&to=fengziqing970202@gmail.com" />
                <LinkIcon srcPic="images/linkedin.svg" link="http://www.linkedin.com/in/ziqing-feng" />
                <LinkIcon srcPic="images/github.svg" link="https://github.com/Fengziqing" />
            </div>
            <ThemeButtom/>
        </div>
    )
}

export default NavBar