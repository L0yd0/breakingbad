import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import PersonajesGrid from './components/personajes/PersonajesGrid'
const App = () => {

  const[items, setItems] = useState([])
  const[isLoading, setItsloading] = useState([true])

  useEffect(()=>{

    const fetchItems = async () => {
      const result = await axios.get('/data/personajes.json')

      console.log(result.data)
      setItems(result.data)

      setItsloading(false)
    }

    fetchItems()

  },[])

  return (
    <div className='container'>
      <Header />
      <PersonajesGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
