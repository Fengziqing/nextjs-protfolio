import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="block xl:p-28 w-11/12 justify-center text-center relative
                   lg:py-28 lg:px-44
                   md:py-20 md:px-32
                   sm:py-12 sm:px-20
                   py-8 px-12">
      <div className="absolute dark:hidden inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5]  to-[#9089fc]  opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} />
      </div>
      <div className=" absolute dark:hidden w-64 h-96 bottom-0 right-10 bg-[#9fb0cf] rounded-full blur-3xl -z-50"></div>
      <div className=" lg:text-2xl text-left h-72 [&>*]:p-1 [&>*]:lg:text-4xl
                       sm:text-xl sm:[&>*]:text-3xl
                       text-lg [&>*]:text-2xl">
        <span className=" text-navYellow font-bold drop-shadow-[2px_3px_0_#665048]">Hello!</span>
        <br />I am <Link href='/home' className=" text-navYellow drop-shadow-[2px_3px_0_#665048] font-bold hover:drop-shadow-[1px_2px_0_#665048]">Ziqing Feng</Link> (Haruko Feng) !
        <br />
        <br />I am a <Link href='/cv' className=" text-navYellow font-bold drop-shadow-[2px_3px_0_#665048] hover:drop-shadow-[1px_2px_0_#665048]">Software Engineer</Link>
        with a <span className=" text-navFontGray dark:text-gray-300">Master&apos;s degree in Computer Science</span>.
        <br />
        <br />I am currently <span className=" text-navFontGray dark:text-gray-300 ">living in China</span>.
        <br />
        <br />I can speak <span className=" text-navFontGray dark:text-gray-300">Chinese, Japanese and English</span>.
      </div>
      <Image src='/images/3d-avatar.png' alt="illution" width={250} height={130}
        className="right-0 absolute sm:-bottom-40 -bottom-44" />
    </div>
  );
}
