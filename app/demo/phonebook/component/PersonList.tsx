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
        <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={deleteOne}> delete </button>
        </li>
    )
}

export default PersonList
