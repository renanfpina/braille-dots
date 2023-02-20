import React, { useState } from 'react'

const InputCharacter = () => {
  const [dots, setDots] = useState('')
  const handleOnChange = (event: any) => {
    event.target.select()
    setDots(event.target.value)
  }

  return (
    <>
      <label htmlFor="character">Input character: </label>
      <input
        type="text"
        id="character"
        name="character"
        autoFocus
        maxLength={1}
        onChange={handleOnChange}
      />
      <p role='region' aria-live='polite'>{dots}</p>
    </>
  )
}

export default InputCharacter
