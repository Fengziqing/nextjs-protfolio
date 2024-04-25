import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const LinkIcon = ({ srcPic, link }: { srcPic: string, link: string }) => {

    return (
        <Link href={link}>
            <Image src={srcPic} alt='social media icon link' width={30} height={30} className=' cursor-pointer mr-10'></Image>
        </Link>
    )
}

export default LinkIcon