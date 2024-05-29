'use client';
import React, { ChangeEvent, FormEvent, Suspense, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const ContaceMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailErrorText, setEmailErrorText] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [messageErrorText, setMessageErrorText] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  async function sendingData() {
    //Sending
    const sendingDialogue = document.getElementById('message_sending')! as HTMLDialogElement;
    sendingDialogue.showModal();
    const sendData = {
      'name': name,
      'email': email,
      'message': message
    }
    setEmail('');
    setName('');
    setMessage('');
    const data = JSON.stringify(sendData);
    axios.defaults.withCredentials = true;
    // console.log(sendData);
    try{
      await axios.post('https://vercel-express-eosin.vercel.app/api/contact', data, {
      // axios.post('http://localhost:3000/api/contact', data, {
      headers: {
          'Content-Type': 'application/json',
      }
    }).then(response => {
      sendingDialogue.close();
      (document.getElementById('success')! as HTMLDialogElement).showModal();
      console.log(response);
      //SendOk
    })
    }catch(error) {
      sendingDialogue.close();
      (document.getElementById('failed')! as HTMLDialogElement).showModal();
      console.log(error);
    }
    // setSending(false);
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    //data checking
    if (name.length === 0) {
      setNameErrorText('At least, let me know your name 🥺🙏');
      setTimeout(() => {
        setNameErrorText('');
      }, 5000);
      return;
    } else if (name.length > 30) {
      setNameErrorText('Your Name should shorter than 30 letters ✍️');
      setTimeout(() => {
        setNameErrorText('');
      }, 5000);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailErrorText('Please enter a valid email address 🥺🥺🥺');
      setTimeout(() => {
        setEmailErrorText('');
      }, 5000);
      return;
    }
    if (message.length === 0) {
      setMessageErrorText('Are you sure you don\'t wanna say anything⬆️🥺⬆️');
      setTimeout(() => {
        setMessageErrorText('');
      }, 5000);
      return;
    } else if (message.length > 500) {
      setMessageErrorText('Your message is too long ❌ , should shorter than 500 letters ✅');
      setTimeout(() => {
        setMessageErrorText('');
      }, 5000);
      return;
    }
    sendingData();
  }

  return (
    <div className=" block text-center">
      <p className=" text-center w-full p-3 justify-center text-lg leading-relaxed dark:text-white
                      sm:text-2xl sm:p-5
                      xl:text-4xl xl:p-10
                    [&>*]:text-orange-700 dark:[&>*]:text-navBoxShadow [&>*]:font-bold">
        Have an Awsome Idea? <span>Let&apos;s Discuss!🤔</span>
        <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
        <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
        <br />...
      </p>
      <div style={{ animation: 'fadeInUp 0.9s' }} className="block sm:w-96 lg:w-[480px] w-80 mt-2 mb-10 text-center shadow-2xl bg-[#e8c8be] dark:bg-[#AEA885] rounded-3xl sm:py-8 py-6 sm:px-12 px-9 mx-auto">
        <form onSubmit={handleSend} className='*:my-3 *:border-none *:rounded-2xl *:text-sm 
                                                [&>p]:text-red-500 [&>p]:mx-2 [&>p]:text-left
                                                  *:sm:my-6 *:sm:text-base
                                                  *:lg:my-8 *:lg:text-lg'>
          <label className="input input-bordered flex items-center gap-2 ">
            Name
            <input type="text" className="grow font-thin" placeholder="haru" value={name} onChange={handleNameChange} />
          </label>
          <p>{nameErrorText}</p>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="haru@feng.com" value={email} onChange={handleEmailChange} />
          </label>
          <p>{emailErrorText}</p>
          <textarea className="textarea textarea-bordered w-full " placeholder="Leave your messages here ..." value={message} onChange={handleMessageChange}></textarea>
          <p>{messageErrorText}</p>
          <button className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500 shadow-lg
                               hover:opacity-90 hover:shadow-sm ">Send</button>
        </form>
      </div>

      <dialog id="message_sending" className=" modal">
        <div className="modal-box bg-[#9A7EAE]">
          <span className="loading loading-dots loading-md text-[#EBEDD4]"></span>
          <h3 className="font-bold text-lg text-[#EBEDD4]">Your Message is Sending...</h3>
          <Image className=' mx-auto' src='/images/sending-email.svg' alt='sending' width={100} height={100} />
          <p className=' italic text-[#D3BA83]'>*You will receive a confirmation email if the message is sent successfully.*</p>
        </div>
      </dialog>

      <dialog id="success" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#B6C796]">
          <Image className=' mx-auto mb-2' src='/images/messages-sended.svg' alt='messages-sended' width={100} height={100} />
          <h3 className="font-bold sm:text-lg text-sm">Message Sended!</h3>
          <div className="modal-action">
            <form method="dialog" className='mx-auto'>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-success">OK</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="failed" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#B63231]">
          <Image className=' mx-auto mb-2' src='/images/messages-sended-fail.svg' alt='messages-sended' width={100} height={100} />
          <h3 className="font-bold sm:text-lg text-sm">Oops!</h3>
          <p className="py-4">There was an error while attempting to send the email. Please try again later.
            <br /><br /> If the issue persists, you can directly email to fengziqing970202@gmail.com</p>
          <div className="modal-action">
            <form method="dialog" className='mx-auto'>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-warning">OK</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ContaceMe