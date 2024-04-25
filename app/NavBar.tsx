import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import LinkIcon from './navBarLinkIcon/LinkIcon';
import avatar from '@/public/images/avatar.png';
import biglogo from '@/public/images/biglogo.png';
import smalllogo from '@/public/images/smalllogo.png';

const NavBar = () => {
    return (
        <div className='bg-navGreen rounded-tr-3xl fixed block m-0 p-9 w-1/3 h-full justify-center'>
            <Link href='/' className='hidden'>
                <Image src={biglogo} alt='haruko' />
            </Link>
            <Link href='/' className="hidden">
                <Image src={smalllogo} alt='small-H' />
            </Link>
            <div className='bg-navBrown rounded-3xl m-0 p-0 flex overflow-clip justify-center font-bold opacity-80 shadow-[3px_5px_0_0_#d6ae7e]'>
                {[['Home', "/home"],
                ['CV', "/cv"],
                ['Demo', "/demo"],
                ['Contact Me', "/contactMe"]
                ].map(([PageName, hrefLink]) =>
                    <Link key={PageName} href={hrefLink} className=' mx-5 my-4 rounded-2xl cursor-pointer hover:opacity-70 transition-all-[0.3 ease-in-out] active:font-bold w-auto'>{PageName}</Link>)}
            </div>
            <Link href='/'>
                <Image className="mt-12 ml-5 justify-content-[left]" src={avatar} alt="avatar" width={173} height={173}/>
            </Link>
            <div className='my-5'>
                <Link href="/" className="text-navYellow font-bold text-4xl ms-3 drop-shadow-[2px_3px_0_#665048]">Haruko Feng<span className='my-4 ml-3 text-sm font-thin drop-shadow-none'>ZiQing Feng(27)</span></Link>
            </div>
            <ul className='block p-0 italic text-lg text-navFontGray justify-center ml-5 space-y-4 list-disc font-light'>
                <li>Software Engineer, Client Engineer</li>
                <li>Computer Science Master</li>
                <li>Live in China</li>
                <li>Language: Japanese, English, Chinese</li>
            </ul>
            <div className="flex justify-center mt-20">
                <LinkIcon srcPic="images/email.svg" link="https://mail.google.com/mail/u/0/?view=cm&amp&fs=1&amp&tf=1&amp&source=mailto&amp&to=fengziqing970202@gmail.com"/>
                <LinkIcon srcPic="images/linkedin.svg" link="http://www.linkedin.com/in/ziqing-feng"/>
                <LinkIcon srcPic="images/github.svg" link="https://github.com/Fengziqing"/>
            </div>
        </div>
    )
}

export default NavBar