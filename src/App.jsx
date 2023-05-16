import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import Inicial from './components/inicial/Inicial'
import Sobre from './components/sobre/Sobre'
import { Divider } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <NavBar />
      <Inicial />
      <Sobre />
      <img src="https://i.pinimg.com/originals/46/0f/16/460f16110f4579d97329a38a1eeb31f9.jpg" alt=""/>
      </div>
  )
}

export default App
