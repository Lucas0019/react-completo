import React, {useState} from 'react'

//Em modo de produção 
// O modo estrito invoca duas vezes a renderização do componente
// quandoo estado é atualizado. Assim é possivel indentificarmos
// funções com efeitos colaterais (side effects) e eliminarmmos as mesmas 

// Funçõe com efeitos colaterais são aquelas que modificam estados
// que estão fora das mesmas

const StrictMode = () => {
  //App Contador 
  const [contar , setContar] = useState(0) 
  const [items, setItems] = useState(['item 0']) 

  function handleClick() {
    let storeCounter = contar + 1 
    
    setContar(storeCounter)
    setItems([...items, 'Item' + (storeCounter)])
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>
        {contar}
      </button>
    </div>
  )
}

export default StrictMode
