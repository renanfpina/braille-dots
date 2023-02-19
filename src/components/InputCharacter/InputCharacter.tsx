import React from 'react'

const InputCharacter = () => {
  const handleOnChange = (event: any) => {
    event.target.select()
    alert('Entrou na função ' + event.target.value)
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
    </>
  )
}

export default InputCharacter
