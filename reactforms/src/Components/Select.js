import React, { useState } from 'react'

/**
 * O value e onChange são definidos no select. 
 * Para definir um valor inicial, coloque o mesmo no useState.
 * 
 * Selecione: Defina o primeiro valor como disabled e com uma string pura, 
 * assim o usuário terá que selecionar um valor.
 */

const Select = () => {

  const [select, setSelect] = useState('')

  return (
    <form>
        <select id="products" value={select} onChange={({ target }) => setSelect(target.value)}>
          <option value="" disabled>Selecione</option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
      <p>{select}</p>
    </form>
  )
}

export default Select
