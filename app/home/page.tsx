import React from 'react';
import Image from 'next/image';
import BentoTitle from '../bentoComponents/BentoTitle';
import BentoLink from '../bentoComponents/BentoLink';
import Picture from '../bentoComponents/Picture';
import Squar from '../bentoComponents/Squar';
import HorizontalRectangle from '../bentoComponents/HorizontalRectangle';
import VerticalRectangle from '../bentoComponents/VerticalRectangle';

const HomePage = () => {
  return (
    <div className='xl:w-11/12 xl:block w-full justify-center'>
      <div className='grid md:grid-cols-row-col-8 md:grid-rows-row-col-8 sm:gap-3 [&>*]:m-3 justify-center
                       grid-cols-col-4'>
        <BentoTitle content='Hello! I am Ziqing Feng (Haruko Feng), Here are some infromation about me 😀🌍!' />
        <div className='col-start-1 col-end-5 row-start-2 row-end-3'>
          <BentoLink imgsrc='/images/menu-linkedin.svg' imgalt='linkedin-icon' clickLink='https://www.linkedin.com/in/ziqing-feng' name='Linkedin' />
        </div>
        <div className='md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-3
                         col-start-1 col-end-5 row-start-3 row-end-4'>
          <BentoLink imgsrc="/images/menu-github.svg" imgalt='github-icon' clickLink='https://github.com/Fengziqing' name='GitHub' />
        </div>
        <div className="md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-7
                         col-start-1 col-end-5 row-start-4 row-end-8">
          <Picture imgsrc="/images/selfie.jpg" imgalt='selfie' />
        </div>
        <div className="md:col-start-5 md:col-end-7 md:row-start-3 md:row-end-5 [&>*]:bg-[#e8e9d5]
                         col-start-1 col-end-3 row-start-8 row-end-10">
          <Squar imgsrc='/images/camera.svg' imgalt="photographer" name='Photographer' />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-3 md:row-end-5 [&>*]:bg-[#9fb0cf]
                         col-start-3 col-end-5 row-start-8 row-end-10">
          <Squar imgsrc='/images/adventure.svg' imgalt='Adventurous' name='Adventurous' />
        </div>
        <div className="md:col-start-5 md:col-end-7 md:row-start-5 md:row-end-7 [&>*]:bg-[#d3dfde]
                         col-start-1 col-end-3 row-start-10 row-end-12">
          <Squar imgsrc='/images/freelancer.svg' imgalt='Freelancer' name='Freelancer' />
        </div>
        <div className="rounded-badge sm:w-96 w-[350px] sm:h-44 h-40 overflow-hidden shadow-xl
                        md:col-start-1 md:col-end-5 md:row-start-7 md:row-end-9
                        col-start-1 col-end-5 row-start-14 row-end-15">
          <iframe
            width={400}
            className='h-full object-cover'
            title="location"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441108.6793185333!2d119.842236745896!3d30.260977711277974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344bb629439aaa99%3A0xa7bfd183824de83a!2z5Lit5Zu95rWZ5rGf55yB5p2t5bee5biC!5e0!3m2!1szh-CN!2sjp!4v1705224789314!5m2!1szh-CN!2sjp'
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="md:col-start-5 md:col-end-7 md:row-start-7 md:row-end-9 [&>*]:bg-[#e5e1bb]
                        col-start-1 col-end-3 row-start-12 row-end-14">
          <Squar imgsrc="/images/Responsible.svg" imgalt='Responsible' name='Responsible' />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-5 md:row-end-9 text-center
                        col-start-3 col-end-5 row-start-10 row-end-13">
          <div className="bg-[#b2bd8c] sm:w-44 w-40 rounded-badge sm:h-96 h-[350px] shadow-lg relative">
            <div className=" left-1 top-1 right-1 h-32 absolute rounded-badge opacity-50 bg-orange-100"></div>
            <Image src='/images/coding.svg' alt='coding/developer' width={180} height={180} className='relative object-cover h-auto' />
            {['Software Engineer', 'Frontend Developer', 'Full-stack Developer', 'Client Engineer'].map(item =>
              <p key={item} className='font-bold -bottom-4 sm:my-6 my-2 text-yellow-950 relative drop-shadow-[2px_1px_0_#d3dfde]'>{item}</p>)}
          </div>
        </div>
      </div>
      <div className="grid sm:gap-3 [&>*]:m-3 justify-center
                      md:grid-cols-row-col-8 md:grid-rows-row-13 
                      grid-cols-col-4">
        <BentoTitle content='I love taking pictures with my friends~ 📷🍃' />
        <div className="col-start-1 col-end-3 row-start-2 row-end-4">
          <Squar imgsrc='/images/xx2.jpg' imgalt='' />
        </div>
        <div className="col-start-3 col-end-5 row-start-2 row-end-6">
          <VerticalRectangle imgsrc='/images/sunset.jpg' imgalt='sunset' />
        </div>
        <div className="md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-6
                          col-start-1 col-end-5 row-start-10 row-end-14">
          <Picture imgsrc='/images/xx.jpg' imgalt='' />
        </div>
        <div className="col-start-1 :col-end-3 row-start-4 row-end-8">
          <VerticalRectangle imgsrc='/images/tokyoTower.jpg' imgalt='' />
        </div>
        <div className="md:col-start-3 md:col-end-7 md:row-start-6 md:row-end-10
                          col-start-1 col-end-5">
          <Picture imgsrc='/images/he.jpg' imgalt='' />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-6 md:row-end-8
                           col-start-1 col-end-3 row-start-14 row-end-16">
          <Squar imgsrc='/images/aline.jpg' imgalt='' />
        </div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-8 md:row-end-10
                        col-start-1 col-end-3 row-start-8 row-end-10">
          <Squar imgsrc='/images/nana.jpg' imgalt='' />
        </div>
        <div className="col-start-1 col-end-5 md:row-start-10 md:row-end-12
                           row-start-12 row-end-14">
          <HorizontalRectangle imgsrc='/images/hub.jpg' imgalt='' />
        </div>
        <div className="md:col-start-5 md:col-end-7 md:row-start-10 md:row-end-12
                            col-start-3 col-end-5 row-start-14 row-end-16">
          <Squar imgsrc='/images/street.jpg' imgalt='' />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-8 md:row-end-12
                           col-start-3 col-end-4 row-start-6 row-end-10">
          <VerticalRectangle imgsrc='/images/sea.jpg' imgalt='' />
        </div>
        <div className="md:col-start-7 md:col-end-9 md:row-start-12 md:row-end-14
                          col-start-1 col-end-3 row-start-16 row-end-18">
          <Squar imgsrc='/images/fish.jpg' imgalt='' />
        </div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-12 md:row-end-14
                        col-start-3 col-end-5">
          <Squar imgsrc='/images/snow.jpg' imgalt='' />
        </div>
        <div className="md:col-start-3 md:col-end-7 md:row-start-12 md:row-end-14
                        col-start-1 col-end-5 row-start-16 row-end-18">
          <HorizontalRectangle imgsrc='/images/tree.jpg' imgalt='' />
        </div>
      </div>
      <p className=' m-10 sm:text-sm opacity-55 italic'>* This Website is 100% Developed and Designed by © Haruko Feng(ZiQing Feng), All Rights Reserved</p>
    </div>
  )
}

export default HomePage