/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react'

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
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{data.title}</title>
    </head>
      <h1>{data.title}</h1>
      <button className='btn'><a target='_blank' href={data.link}>Facebook</a></button>
      
    </>
  )
}

export default App
