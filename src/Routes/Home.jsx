import { useEffect, useState, } from 'react'
import Card from '../Components/card'
import { useContextGlobal } from '../Components/utils/global.context';


const URL_API = "https://jsonplaceholder.typicode.com/users"

const Home = () => {

  const { state } = useContextGlobal();
  const [dentists, setDentists] = useState([])

  const fetchDentistsApi = () => {
    fetch(URL_API)
      .then(response => response.json())
      .then(data => setDentists(data))
  }

  useEffect(() => {
    fetchDentistsApi()
  }, [])


  return (
    <div className={state.theme === 'dark' ? 'dark' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist)=>{
          return <Card dentist={dentist} key={dentist.id} />})}
      </div>
    </div>
  )
}

export default Home