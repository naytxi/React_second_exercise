import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Greetings from './components/Greetings'


function App() {
  return (
    <div>
      <h1>Ejercicio 1: Counter</h1>
      <Counter start={10} step={2} />

      <h1>Ejercicio 2: Greetings</h1>
      <Greetings name="Euralio" />
    </div>
  )
}

export default App
