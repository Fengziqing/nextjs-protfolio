'use client'
import React from 'react';
// import fs from 'fs'

const DownloadCV = () => {
    function downloadCV() {
        const downloadLink = document.createElement('a');
        // downloadLink.style = "display:none";
        downloadLink.href = 'resume.pdf';
        downloadLink.download = 'ZiQingFeng_Resume.pdf';
        downloadLink.click();
    }
    return (
        <div className=" p-12 text-3xl w-full text-center">
            <span>➡️ ➡️ ➡️ </span>
            <button className='btn w-64 bg-[#efd96f] rounded-2xl shadow-xl border-none 
                            hover:bg-[#589da4] hover:text-white' 
                            onClick={()=>downloadCV()}> Download CV</button>
            <span> ⬅️ ⬅️ ⬅️</span>
        </div>
    )
}

export default DownloadCV