import React, { ChangeEvent } from "react"

interface Props {
    updateFilter: (value: string) => void
}

export default function Filter({ updateFilter }: Props) {
    const filterName = (event: ChangeEvent<HTMLInputElement>) => {
        updateFilter(event.target.value)
    }
    return (
        <div>
            <p className="font-bold md:text-xl text-md dark:text-white">
                filter show with:
            </p>
            <input
                onChange={filterName}
                className=" input input-sm border-none border-gray-300 text-sm font-normal my-2"
            ></input>
        </div>
    )
}
