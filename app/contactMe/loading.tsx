import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div>
        <Image src="/images/sending-email.svg" alt="message sending..." width={100} height={100}/>
        <p>Your Message is Sending...
            <br/> Please wait for a moment... 
            <br/> <span>*You will receive a confirmation email if the message is sent successfully.*</span>
        </p>
    </div>
  )
}

export default Loading