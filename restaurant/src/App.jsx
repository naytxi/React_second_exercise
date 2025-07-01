import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'


function App() {
  return (
    <div>
      <h1>Ejercicio 1: Counter</h1>
      <Counter start={10} step={2} />

    </div>
  )
}

export default App
