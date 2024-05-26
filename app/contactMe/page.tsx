'use client';
import React, { ChangeEvent, FormEvent, Suspense, useState } from 'react';
import axios from 'axios';
import Loading from './loading';

const ContaceMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [needBlur, setNeedBlur] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [sendOk, setSendOk] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [sendButton, setSendButton] = useState('Send');
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
    const sendData = {
      'name': name,
      'email': email,
      'message': message
    }
    console.log(sendData);
    setSendButton('Sending');
    setNeedBlur(true);
    setWaiting(true);
    const data = JSON.stringify(sendData);
    axios.defaults.withCredentials = true;

    try {
      // await axios.post('https://vercel-express-eosin.vercel.app/api/contact', data, {
      await axios.post('http://localhost:3000/api/contact', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(response => {
        setName('');
        setEmail('');
        setMessage('');
        setSendOk(true);
      });
    } catch (error) {
      setSendFailed(true);
      console.log(error);
    }
    setSendButton('Send');
    setWaiting(false)
    setNeedBlur(false);
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

    <Suspense fallback={<Loading />}>
      <div className="block text-center">
        <p className=" text-center w-full p-3 justify-center text-lg leading-relaxed dark:text-white
                      sm:text-2xl sm:p-5
                      xl:text-4xl xl:p-10
                    [&>*]:text-orange-700 dark:[&>*]:text-navBoxShadow [&>*]:font-bold">
          Have an Awsome Idea? <span>Let&apos;s Discuss!🤔</span>
          <br />Want <span>Hire me</span>? Send me your <span>e-mail!📧</span>
          <br />Wanna Be friends with me?<span> Leave a message!⬇️</span>
          <br />...
        </p>
        <div className="block sm:w-96 lg:w-[480px] w-80 mt-2 mb-10 text-center shadow-2xl bg-[#e8c8be] dark:bg-[#AEA885] rounded-3xl sm:py-8 py-6 sm:px-12 px-9 mx-auto">
          <form onSubmit={handleSend} className='*:my-3 *:border-none *:rounded-2xl *:text-sm 
                                                [&>p]:text-red-500 [&>p]:mx-2 [&>p]:text-left
                                                  *:sm:my-6 *:sm:text-base
                                                  *:lg:my-8 *:lg:text-lg'>
            <label className="input input-bordered flex items-center gap-2 ">
              Name
              <input type="text" className="grow font-thin" placeholder="haru" onChange={handleNameChange} />
            </label>
            <p>{nameErrorText}</p>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" placeholder="haru@feng.com" onChange={handleEmailChange} />
            </label>
            <p>{emailErrorText}</p>
            <textarea className="textarea textarea-bordered w-full " placeholder="Leave your messages here ..." onChange={handleMessageChange}></textarea>
            <p>{messageErrorText}</p>
            <button className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500 shadow-lg
                               hover:opacity-90 hover:shadow-sm ">{sendButton}</button>
          </form>
        </div>
      </div>
    </Suspense>
  )
}

export default ContaceMe