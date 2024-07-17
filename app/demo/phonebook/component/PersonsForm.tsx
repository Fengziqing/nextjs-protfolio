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
                    name: <input value={newName} onChange={nameChanged} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={numberChanged} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}
