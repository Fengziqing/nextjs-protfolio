"use client"
import { useState, useEffect } from "react"
import PersonsForm from "./component/PersonsForm"
import Filter from "./component/Filter"
import ShowPersons from "./component/ShowPersons"
import noteServeice from "./server/note"
import Notification from "./component/Notification"
import ErrorMessage from "./component/ErrorMessage"
import { BacktoDemoButtom } from "../BacktoDemoButtom"

interface Person {
    name: string
    number: string
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [showPersons, setShowPersons] = useState(persons)
    const [statusMessgae, setStatusMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        noteServeice.getAll().then((initialNotes) => {
            setPersons(initialNotes)
            setShowPersons(initialNotes)
        })
    }, [])

    const updateFilter = (filter: string) => {
        const newShowPerson = persons.filter((person: Person) =>
            person.name.includes(filter),
        )
        setShowPersons(newShowPerson)
    }

    const createPerson = (newInput: { name: string; number: string }) => {
        noteServeice
            .create(newInput)
            .then((newList) => {
                setPersons(persons.concat(newList))
                setShowPersons(persons.concat(newList))
                setStatusMessage(`Added ${newInput.name}`)
            })
            .catch((error) => {
                console.log(error.response.data)
                setErrorMessage(error.response.data)
            })
    }

    const deletePerson = (person: {
        id: number
        name: string
        number: string
    }) => {
        console.log(person)
        noteServeice.deletePerson(person).then(() => {
            noteServeice.getAll().then((response) => {
                setPersons(response)
                setShowPersons(response)
                setStatusMessage(`Delete ${person.name} successfully!`)
            })
        })
    }

    const updatePerson = (person: {
        id: number
        name: string
        number: string
    }) => {
        noteServeice.update(person).catch((error) => {
            setErrorMessage(
                `Information of ${person.name} has already been removed from server`,
            )
        })

        noteServeice.getAll().then((initialNotes) => {
            setPersons(initialNotes)
            setShowPersons(initialNotes)
            setStatusMessage(`Updated ${person.name}, need refresh page`)
        })
    }

    return (
        <div className="mx-12 py-12 px-2">
            <BacktoDemoButtom />
            <h1>Phonebook</h1>
            <Notification message={statusMessgae} />
            <ErrorMessage message={errorMessage} />
            <Filter updateFilter={updateFilter} />
            <h1>add a new:</h1>
            <PersonsForm
                persons={persons}
                createPerson={createPerson}
                updatePerson={(person: {
                    id: number
                    name: string
                    number: string
                }) => updatePerson(person)}
            />
            <p className="font-bold md:text-xl text-md dark:text-white">
                Numbers :
            </p>
            <ShowPersons
                showPersons={showPersons}
                deletePerson={(person: {
                    id: number
                    name: string
                    number: string
                }) => {
                    deletePerson(person)
                }}
            />
        </div>
    )
}

export default App
