import React from 'react'
import { InputCharacter } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Braille Dots</h1>
      </header>
      <main className="input-container">
        <InputCharacter />
      </main>
      <footer>
        <div className="instructions">
          <h2>Instructions:</h2>
          <ul>
            <li>Enter a single character</li>
            <li>receive the response</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
