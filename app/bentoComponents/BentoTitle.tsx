import React from 'react'

function BentoTitle({content}:{content:string}){
    return (
        <p className=" col-start-1 col-end-9 text-left pl-5 row-start-1 w-full font-base font-bold text-base
        sm:p-7 sm:text-lg">{content}</p>
    )
}

export default BentoTitle