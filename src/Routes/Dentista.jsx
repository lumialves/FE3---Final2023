import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const URL_API = "https://jsonplaceholder.typicode.com/users/"

const Dentista = () => {
  const { id } = useParams()
  const [dentist, setDentist] = useState("")
  const [isLoading, setIsLoading] = useState("Loading");
  const [errorFetch, setErrorFetch] = useState("");

  const fetchDentistApi = () => {
    fetch(URL_API + id)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching data")
        }
        return response.json()
      })
      .then(data => setDentist(data))
      .catch(()=> setErrorFetch("Error fetching data"))
      .finally(setIsLoading(""))
  }

  useEffect(() => {
    fetchDentistApi()
  }, [])

  const dentistTable = (dentist) => {
    const { name, email, phone, website } = dentist
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <>
      <h1>Detail Dentist {id}</h1>
      {isLoading && <p>{isLoading}</p>}
      {errorFetch && <p>{errorFetch}</p>}
      {dentist && dentistTable(dentist)}
    </>
  )
}

export default Dentista