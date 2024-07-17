import React from "react"
import PersonList from "./PersonList"

interface Person {
    id: number
    name: string
    number: string
}
interface Function {
    showPersons: Person[]
    deletePerson: (person: Person) => void
}
export default function ShowPersons({ showPersons, deletePerson }: Function) {
    const deleteOne = (person: Person) => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            deletePerson(person)
        }
    }

    return (
        <div>
            {showPersons.map((person) => (
                <PersonList
                    key={person.id}
                    person={person}
                    deleteOne={() => deleteOne(person)}
                />
            ))}
        </div>
    )
}
