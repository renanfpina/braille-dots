import React from 'react'
import { InputCharacter } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Braille Dots</p>
        <InputCharacter />
      </header>
    </div>
  )
}

export default App
