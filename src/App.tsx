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
          <h2>Instruções:</h2>
          <ul>
            <li>Digite um caracter para consultar os pontos braille correspondentes.</li>
            <li>Caracteres que utilizam mais de uma célula braille, retornarão com um sinal de + (mais) para separar as células.</li>
            <li>Caso algum ponto braille esteja faltando ou incorreto, reporte para <a href="mailto:renanfpina@gmail.com?subject=Braille Dots">renanfpina@gmail.com</a>.</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
