import React, {useState} from 'react'

const Reatividade = () => {

  const [items, setItems] = useState(['Item 1', 'Item 2'])

  // Errada - Modificando o estado com apenas uma função de atualização
  function handleClick() {
    items.push('Novo Item - push()')
  }

  // Correto - Desestruturar o array atual, criando uma nova
  // e adicionando um novo elemento
  function handleClickReativo() {
    setItems([...items], 'Novo Item Reativo')
  }


  return (
    <>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
      <button onClick={handleClick}>Adicionar Item</button>
      <button onClick={handleClickReativo}>Adicionar Item Reativo</button>
    </>
  )
}

export default Reatividade
