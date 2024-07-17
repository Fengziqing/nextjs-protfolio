"use client"
import React, { ChangeEvent, FormEvent, useState } from "react"

interface Person {
    id: number
    name: string
    number: string
}

interface Props {
    persons: Person[]
    createPerson: (person: { name: string; number: string }) => void
    updatePerson: (person: Person) => void
}

export default function PersonsForm({
    persons,
    createPerson,
    updatePerson,
}: Props) {
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const updateList = (event: FormEvent) => {
        event.preventDefault()
        if (newNumber === "") {
            window.alert("number could not be empty")
            return
        }
        const result = persons.find((item: Person) => item.name === newName)
        if (result) {
            const newNumberPerson = { ...result, number: newNumber }
            updatePerson(newNumberPerson)
        } else {
            const newInput = {
                name: newName,
                number: newNumber,
            }
            createPerson(newInput)
        }
        setNewName("")
        setNewNumber("")
    }

    const nameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }

    const numberChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <form onSubmit={updateList}>
                <div>
                    <p className="font-bold md:text-xl text-md dark:text-white">
                        name:
                    </p>
                    <input
                        value={newName}
                        onChange={nameChanged}
                        className=" input input-sm border-none border-gray-300 text-sm font-normal"
                    />
                </div>
                <div>
                    <p className="font-bold md:text-xl text-md dark:text-white">
                        number:
                    </p>
                    <input
                        value={newNumber}
                        onChange={numberChanged}
                        className=" input input-sm border-none border-gray-300 text-sm font-normal"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-neutral m-2">
                        add
                    </button>
                </div>
            </form>
        </div>
    )
}
