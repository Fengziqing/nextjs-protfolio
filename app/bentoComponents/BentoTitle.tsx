import React from 'react'

function BentoTitle({content}:{content:string}){
    return (
        <p className="col-start-1 col-end-5 row-start-1 row-end-2 text-left font-base font-bold p-2 text-sm dark:text-white
        md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-2
        sm:p-7 sm:text-lg">{content}</p>
    )
}

export default BentoTitle