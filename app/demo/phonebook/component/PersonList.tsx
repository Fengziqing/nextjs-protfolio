import React from "react"

interface Props {
    person: {
        id: number
        name: string
        number: string
    }
    deleteOne: () => void
}

// eslint-disable-next-line no-unused-vars
const PersonList = ({ person, deleteOne }: Props) => {
    return (
        <li key={person.id} className="italic my-4">
            {person.name} {person.number}{" "}
            <button onClick={deleteOne} className="btn btn-sm">
                {" "}
                delete{" "}
            </button>
        </li>
    )
}

export default PersonList
