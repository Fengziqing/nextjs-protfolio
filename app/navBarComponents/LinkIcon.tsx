import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const LinkIcon = ({ srcPic, link }: { srcPic: string, link: string }) => {
    return (
        <Link href={link} target='_blank' data-tip={link}>
            <Image src={srcPic} alt='socialmedia icon link' width={30} height={30} className='cursor-pointer mr-10'></Image>
        </Link>
    )
}

export default LinkIcon