import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{

    axios.get('http://localhost:3000/').then( res =>{
      setData(res.data)
    }).catch(err=>{
      console.log(err)
    })

  },[])

  return (
    <>
      <h1>{data.title}</h1>
      <button>Next</button>
      
    </>
  )
}

export default App
