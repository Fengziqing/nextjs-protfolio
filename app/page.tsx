import Image from "next/image";

export default function Home() {
  return (
    <div className="block m-5 w-11/12 justify-center text-center relative">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5]  to-[#9089fc]  opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} />
      </div>
      <div className=" absolute w-32 h-96 top-0 left-10 bg-blue-200 rounded-full blur-3xl -z-50"></div>
      <div className=" text-2xl h-72 w-10/12 font-normal [&>*]:p-1 [&>*]:text-navBrown [&>*]:text-3xl">
        <span>Hello!</span> I am <span>Ziqing Feng</span> (Haruko Feng) !
        <br />I am a <span>Software Engineer</span>
        with a <span>Master&apos;s degree in Computer Science</span>.
        <br />I am currently <span>living in China</span>.
        <br />Regarding my language proficiency, I can speak <span>Chinese</span>, <span>Japanese</span>,
        and <span>English</span>.
      </div>
      <Image src='/images/3d-avatar.png' alt="illution" width={200} height={100}
        className=" h-40 w-auto right-0 absolute" />
    </div>
  );
}
