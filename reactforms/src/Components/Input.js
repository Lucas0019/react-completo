import React, { useState } from 'react'

// Para criarmos campos de formulário reativos, 
// devemos definir o estado para o value 
// e a função atualizadora para o onChange.

// O atributo for é usado como htmlFor no JSX

const Input = () => {
  const [nome, setNome ] = useState('')

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input 
        type="text" 
        id="nome" 
        value={nome} 
        onChange={(event) => setNome(event.target.value)}
      />
    </form>
  )
}

export default Input
