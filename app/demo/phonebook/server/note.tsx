import axios from "axios"

interface Person {
    id: number
    name: string
    number: string
}
//aws backend
// const baseUrl = "https://vercel-express-eosin.vercel.app/api/persons"
const baseUrl = "http://localhost:3000/api/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then((response) => response.data)
}

const create = (person: { name: string; number: string }) => {
    const request = axios.post(baseUrl, person)
    return request.then((response) => response.data)
}

const deletePerson = (person: Person) => {
    const request = axios
        .delete(`${baseUrl}/${person.id}`, { data: { person } })
        .catch((error) => console.log("front end error is", error))
    return request.then((response: any) => {
        // console.log(response)
        return response.data
    })
}

const update = (person: Person) => {
    console.log("update:", person)
    const request = axios
        .put(`${baseUrl}/${person.id}`, person)
        .catch((error) => {
            console.log(error)
        })
    return request.then((response: any) => response.data)
}

export default { getAll, create, deletePerson, update }
