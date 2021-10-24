import React, { useState } from 'react'

/**
 * É um input do tipo radio
 * 
 * No radio comparamos o valor selecionado com o valor do input, 
 * dentro do atributo checked. O que retornar true irá marcar o botão.
 */

const Radio = () => {

  const [radio, setRadio] = useState('')

  function handleChange({ target }) {
    setRadio(target.value)
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>

      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>

      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          onChange={handleChange}
        />
        Tablet
      </label>

      <p>{radio}</p>
    </form>
  );
};

export default Radio
