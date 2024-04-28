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
    <div className='w-11/12'>
      {/* <div className="information-area">
        <div className="dot"></div>
        <p><span>Hello!</span> I am <span>Ziqing Feng</span> (Haruko Feng) !
          <br />I am a <span>Software Engineer</span> with a <span>Master's degree in Computer Science</span>.
          <br />I am currently <span>living in China</span>.
          <br />Regarding my language proficiency, I can speak <span>Chinese</span>, <span>Japanese</span>,
          and <span>English</span>.</p>
        <img src={illustration} alt="illution"></img>
      </div> */}
      <div className='p-0 grid grid-cols-row-col-8 grid-rows-row-col-8 gap-2'>
        <BentoTitle content='Hello! I am Ziqing Feng (Haruko Feng), Here are some infromation about me 😀🌍!' />
        <div className='col-start-1 col-end-5 row-start-2 row-end-2'>
          <BentoLink imgsrc='/images/menu-linkedin.svg' imgalt='linkedin-icon' clickLink='https://www.linkedin.com/in/ziqing-feng' name='Linkedin' />
        </div>
        <div className='col-start-5 col-end-9 row-start-2 row-end-2'>
          <BentoLink imgsrc="/images/menu-github.svg" imgalt='github-icon' clickLink='https://github.com/Fengziqing' name='GitHub' />
        </div>
        <div className="col-start-1 col-end-5 row-start-3 row-end-6">
          <Picture imgsrc="/images/selfie.jpg" imgalt='selfie' />
        </div>
        <div className="col-start-5 col-end-7 row-start-3 row-end-4 [&>*]:bg-[#e8e9d5]">
          <Squar imgsrc='/images/camera.svg' imgalt="photographer" name='Photographer' />
        </div>
        <div className="col-start-7 col-end-9 row-start-3 row-end-4 [&>*]:bg-[#9fb0cf]">
          <Squar imgsrc='/images/adventure.svg' imgalt='Adventurous' name='Adventurous' />
        </div>
        <div className="col-start-5 col-end-7 row-start-5 row-end-6 [&>*]:bg-[#d3dfde]">
          <Squar imgsrc='/images/freelancer.svg' imgalt='Freelancer' name='Freelancer' />
        </div>
        <div className="col-start-1 col-end-5 row-start-7 row-end-8 rounded-badge w-96 h-48 overflow-hidden shadow-xl">
          <iframe
            width={384}
            height={200}
            className="location"
            title="location"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441108.6793185333!2d119.842236745896!3d30.260977711277974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344bb629439aaa99%3A0xa7bfd183824de83a!2z5Lit5Zu95rWZ5rGf55yB5p2t5bee5biC!5e0!3m2!1szh-CN!2sjp!4v1705224789314!5m2!1szh-CN!2sjp'
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="col-start-5 col-end-7 row-start-7 row-end-8 [&>*]:bg-[#e5e1bb]">
          <Squar imgsrc="/images/responsible.svg" imgalt='Responsible' name='Responsible' />
        </div>
        <div className="col-start-7 col-end-9 row-start-5 row-end-8 text-center">
          <div className="bg-[#b2bd8c] w-48 rounded-badge h-96 shadow-lg relative">
            <div className="  left-1 top-1 right-1 h-36 absolute rounded-badge opacity-50 bg-orange-100"></div>
            <Image src='/images/coding.svg' alt='coding/developer' width={180} height={180} className='relative object-cover h-auto mt-2' />
            {['Software Engineer', 'Frontend Developer', 'Full-stack Developer', 'Client Engineer'].map(item =>
              <p key={item} className='font-bold -bottom-6 my-5 text-yellow-950 relative drop-shadow-[2px_1px_0_#d3dfde]'>{item}</p>)}
          </div>
        </div>
      </div>
      <div className="p-0 grid grid-cols-row-col-8 grid-rows-row-13 gap-2">
        <BentoTitle content='I love taking pictures with my friends~ 📷🍃' />
        <div className=" col-start-1 col-end-3 row-start-2 row-end-3">
          <Squar imgsrc='/images/xx2.jpg' imgalt='' />
        </div>
        <div className="col-start-3 col-end-5 row-start-2 row-end-5">
          <VerticalRectangle imgsrc='/images/sunset.jpg' imgalt='sunset' />
        </div>
        <div className="col-start-5 col-end-9 row-start-2 row-end-5">
          <Picture imgsrc='/images/xx.jpg' imgalt='' />
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-6">
          <VerticalRectangle imgsrc='/images/tokyoTower.jpg' imgalt='' />
        </div>
        <div className="col-start-3 col-end-7 row-start-5 row-end-8">
          <Picture imgsrc='/images/he.jpg' imgalt='' />
        </div>
        <div className="col-start-7 col-end-9 row-start-5 row-end-7">
          <Squar imgsrc='/images/aline.jpg' imgalt='' />
        </div>
        <div className="col-start-1 col-end-3 row-start-6 row-end-9">
          <Squar imgsrc='/images/nana.jpg' imgalt='' />
        </div>
        <div className="col-start-1 col-end-5 row-start-10 row-end-11">
          <HorizontalRectangle imgsrc='/images/hub.jpg' imgalt='' />
        </div>
        <div className="col-start-5 col-end-7 row-start-10 row-end-11">
          <Squar imgsrc='/images/street.jpg' imgalt='' />
        </div>
        <div className="col-start-7 col-end-9 row-start-8 row-end-11">
          <VerticalRectangle imgsrc='/images/sea.jpg' imgalt='' />
        </div>
        <div className="col-start-1 col-end-2 row-start-12 row-end-13">
          <Squar imgsrc='/images/snow.jpg' imgalt='' />
        </div>
        <div className="col-start-3 col-end-7 row-start-12 row-end-13">
          <HorizontalRectangle imgsrc='/images/tree.jpg' imgalt='' />
        </div>
        <div className="col-start-7 col-end-9 row-start-12 row-end-13">
          <Squar imgsrc='/images/fish.jpg' imgalt='' />
        </div>
      </div>
      {/* <div className="loader" /> */}
    </div>
  )
}

export default HomePage