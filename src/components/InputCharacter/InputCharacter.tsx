import React, { useState, useEffect, useRef, MutableRefObject } from 'react'
import brailleMap from '../../brailleMap'

const InputCharacter = () => {
  const [dots, setDots] = useState('')
  const myRef = useRef() as MutableRefObject<HTMLInputElement>

  useEffect(() => {
    myRef.current.focus()
    myRef.current.click()
  }, [])

  const isUpperCase = (character: string): boolean => {
    return character === character.toUpperCase()
  }

  const handleOnChange = (event: any) => {
    const character = event.target.value
    const characterToLower = event.target.value.toLowerCase()

    event.target.select()

    if (brailleMap[characterToLower]) {
      isUpperCase(character)
        ? setDots(`${brailleMap['upperCase']} + ${brailleMap[characterToLower]}`)
        : setDots(brailleMap[characterToLower])
    } else {
      setDots('Desculpe, pontos braille não encontrados.')
    }
  }

  return (
    <>
      <label htmlFor="character">Digite um caracter: </label>
      <input
        type="text"
        id="character"
        name="character"
        ref={myRef}
        placeholder="Digite um caracter"
        maxLength={1}
        onChange={handleOnChange}
      />
      <p role="region" aria-live="polite">
        {dots}
      </p>
    </>
  )
}

export default InputCharacter
