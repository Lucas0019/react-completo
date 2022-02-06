import { useState } from 'react'
import { Radio } from './Radio';

export const CustomRadio = () => {  
  
  const [ cor, setCor ] = useState('');
  const [ fruta, setFruta ] = useState('');

  return (
    <div>
      <h2>Cor selecionada: {cor}</h2>
      <Radio
        options={['vermelho', 'azul', 'verde']}
        value={cor}
        setValue={setCor}
      />
      <h2>Fruta selecionada: {fruta}</h2>
      <Radio
        options={['banana', 'maçã', 'laranja']}
        value={fruta}
        setValue={setFruta}
      />

    </div>
  )
}

