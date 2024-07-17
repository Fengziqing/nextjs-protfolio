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
            filter show with <input onChange={filterName}></input>
        </div>
    )
}
