import React, {useState} from 'react'

const Callback = () => {

  // Callback Valor Incial
  const [active, setActive] = useState(() => {
    const activeLocal = window.localStorage.getItem('ativo');
    return activeLocal;
  } )
  
  function handleClick() {
    //Usando um callback 
    setActive((anterior) => !anterior) 
  }

  return (
    <div>
      <button onClick={handleClick}>
        {active ? 'Está Ativo' : 'Está Inativo'}
      </button>
    </div>
  )
}

export default Callback
