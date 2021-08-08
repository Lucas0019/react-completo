import React, {useState, useCallback} from 'react'

// Permite definirmos um callback e uma lista de dependências do callback. 
// Esse callback só será recriado se essa lista de dependências for modificada, 
// caso contrário ele não irá recriar o callback

// Dificilmente você irá encontrar um cenário em que essa função seja útil

const UseCallback = () => {

  const [contar, setContar] = useState(0)

  const handleClick = useCallback(() => {
    setContar((contar) => contar + 1);
  }, [])

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}

export default UseCallback
