import React, { useState } from 'react'
import brailleMap from '../../brailleMap'

const InputCharacter = () => {
  const [dots, setDots] = useState('')
  const handleOnChange = (event: any) => {
    const character = event.target.value
    event.target.select()
    setDots(brailleMap[character])
  }

  return (
    <>
      <label htmlFor="character">Input character: </label>
      <input type="text" id="character" name="character" autoFocus maxLength={1} onChange={handleOnChange} />
      <p role="region" aria-live="polite">
        {dots}
      </p>
    </>
  )
}

export default InputCharacter
