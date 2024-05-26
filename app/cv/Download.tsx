import React, { MouseEvent } from 'react';

const DownloadCV = () => {
    function downloadCV(e:MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const downloadLink = document.createElement('a');
        downloadLink.href = 'resume.pdf';
        downloadLink.download = 'ZiQingFeng_resume.pdf';
        downloadLink.click();
    }

    return (
        <div className=" p-3 md:p-12 text-base sm:text-lg md:text-3xl w-full text-center">
            <span className=' hidden md:inline-flex'>➡️ ➡️ ➡️ </span>
            <button className='btn mx-3 sm:w-64 w-40 text-navBrown bg-[#efd96f] rounded-2xl shadow-xl border-none 
                            hover:bg-[#589da4] hover:text-white' 
                            onClick={downloadCV}> Download CV</button>
            <span className=' hidden md:inline-flex'> ⬅️ ⬅️ ⬅️</span>
        </div>
    )
}

export default DownloadCV