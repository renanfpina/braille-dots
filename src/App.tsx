import React from 'react'
import { InputCharacter } from './components'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Braille Dots</h1>
      </header>
      <main>
      <InputCharacter />
      </main>
      <footer>
        <h2>Instructions:</h2>
        <ul>
          <li>Enter a single character</li>
          <li>receive the respponse</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
